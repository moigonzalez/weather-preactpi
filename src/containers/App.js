import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks';

import AppComponent from '../components/App';

import mockWeather from './mockWeather';

const App = () => {
  const [weather, setWeather] = useState({});
  const [sunrise, setSunrise] = useState(0);
  const [sunset, setSunset] = useState(0);

  const getWeather = () => {
    fetch('/.netlify/functions/get-weather')
      .then(x => x.json())
      .then(res => {
        const { city } = res;
        const { sunrise, sunset } = city;

        setWeather(res);
        setSunrise(sunrise);
        setSunset(sunset);
      });
    // setTimeout(() => {
    //   const { city } = mockWeather;
    //   const { sunrise, sunset } = city;

    //   setWeather(mockWeather)
    //   setSunrise(sunrise);
    //   setSunset(sunset);
    // }, 1000);
  }

  useEffect(() => {
    if (weather.cod === '200') {
      const timeWorker = new Worker('../../static/update-time-worker.js');
      timeWorker.postMessage(`${weather.list[0].dt}`);

      timeWorker.onmessage = ({ data }) => {
        getWeather();
      }
    }
  }, [weather]);

  useEffect(() => {
    if (sunrise !== 0 && sunset !== 0) {
      if (sunrise < sunset) {
        document.body.classList.remove('dark');
      } else {
        document.body.classList.add('dark');
      }

      const timeWorker = new Worker('../../static/update-dark-theme.js');
      timeWorker.postMessage(JSON.stringify({
        sunrise,
        sunset
      }));

      timeWorker.onmessage = ({ data }) => {
        if (data === 'day') {
          document.body.classList.remove('dark');
        } else {
          document.body.classList.add('dark');
        }
      }
    }
  }, [sunrise, sunset])

  useEffect(() => {
      getWeather();
  }, []);

  return <AppComponent weather={weather} />;
};

export default App;
