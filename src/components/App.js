import { h, Fragment } from 'preact'
import { useEffect, useState } from 'preact/hooks';

import Loader from './Loader';
import Title from './Title';
import BoxContainer from './BoxContainer';

const App = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    // fetch('/.netlify/functions/get-weather')
    //   .then(x => x.json())
    //   .then(res => setWeather(res));
      setTimeout(() => {
        setWeather(JSON.parse('{"cod":"200","message":0,"cnt":40,"list":[{"dt":1585148400,"main":{"temp":9.61,"feels_like":3.77,"temp_min":8.15,"temp_max":9.61,"pressure":1031,"sea_level":1031,"grnd_level":1026,"humidity":47,"temp_kf":1.46},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":5},"wind":{"speed":5.28,"deg":95},"sys":{"pod":"d"},"dt_txt":"2020-03-25 15:00:00"},{"dt":1585159200,"main":{"temp":5.73,"feels_like":-0.13,"temp_min":4.63,"temp_max":5.73,"pressure":1031,"sea_level":1031,"grnd_level":1025,"humidity":61,"temp_kf":1.1},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":3},"wind":{"speed":5.3,"deg":93},"sys":{"pod":"n"},"dt_txt":"2020-03-25 18:00:00"},{"dt":1585170000,"main":{"temp":3.62,"feels_like":-2.41,"temp_min":2.89,"temp_max":3.62,"pressure":1031,"sea_level":1031,"grnd_level":1026,"humidity":69,"temp_kf":0.73},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":5.48,"deg":102},"sys":{"pod":"n"},"dt_txt":"2020-03-25 21:00:00"},{"dt":1585180800,"main":{"temp":1.64,"feels_like":-3.9,"temp_min":1.27,"temp_max":1.64,"pressure":1031,"sea_level":1031,"grnd_level":1025,"humidity":77,"temp_kf":0.37},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":4.69,"deg":99},"sys":{"pod":"n"},"dt_txt":"2020-03-26 00:00:00"},{"dt":1585191600,"main":{"temp":-0.14,"feels_like":-5.62,"temp_min":-0.14,"temp_max":-0.14,"pressure":1030,"sea_level":1030,"grnd_level":1024,"humidity":85,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":4.53,"deg":93},"sys":{"pod":"n"},"dt_txt":"2020-03-26 03:00:00"},{"dt":1585202400,"main":{"temp":0,"feels_like":-5.45,"temp_min":0,"temp_max":0,"pressure":1029,"sea_level":1029,"grnd_level":1024,"humidity":84,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":4.49,"deg":91},"sys":{"pod":"d"},"dt_txt":"2020-03-26 06:00:00"},{"dt":1585213200,"main":{"temp":4.86,"feels_like":-0.83,"temp_min":4.86,"temp_max":4.86,"pressure":1029,"sea_level":1029,"grnd_level":1024,"humidity":61,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":4.89,"deg":93},"sys":{"pod":"d"},"dt_txt":"2020-03-26 09:00:00"},{"dt":1585224000,"main":{"temp":9.02,"feels_like":3.27,"temp_min":9.02,"temp_max":9.02,"pressure":1028,"sea_level":1028,"grnd_level":1022,"humidity":47,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":5.05,"deg":83},"sys":{"pod":"d"},"dt_txt":"2020-03-26 12:00:00"},{"dt":1585234800,"main":{"temp":9.76,"feels_like":3.75,"temp_min":9.76,"temp_max":9.76,"pressure":1026,"sea_level":1026,"grnd_level":1021,"humidity":47,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":2},"wind":{"speed":5.55,"deg":84},"sys":{"pod":"d"},"dt_txt":"2020-03-26 15:00:00"},{"dt":1585245600,"main":{"temp":6.54,"feels_like":1.44,"temp_min":6.54,"temp_max":6.54,"pressure":1026,"sea_level":1026,"grnd_level":1021,"humidity":60,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":1},"wind":{"speed":4.31,"deg":84},"sys":{"pod":"n"},"dt_txt":"2020-03-26 18:00:00"},{"dt":1585256400,"main":{"temp":4.88,"feels_like":-0.17,"temp_min":4.88,"temp_max":4.88,"pressure":1027,"sea_level":1027,"grnd_level":1021,"humidity":67,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":3},"wind":{"speed":4.23,"deg":86},"sys":{"pod":"n"},"dt_txt":"2020-03-26 21:00:00"},{"dt":1585267200,"main":{"temp":3.82,"feels_like":-0.99,"temp_min":3.82,"temp_max":3.82,"pressure":1026,"sea_level":1026,"grnd_level":1020,"humidity":72,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":15},"wind":{"speed":3.88,"deg":72},"sys":{"pod":"n"},"dt_txt":"2020-03-27 00:00:00"},{"dt":1585278000,"main":{"temp":3.5,"feels_like":-1.62,"temp_min":3.5,"temp_max":3.5,"pressure":1025,"sea_level":1025,"grnd_level":1019,"humidity":75,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":90},"wind":{"speed":4.37,"deg":71},"sys":{"pod":"n"},"dt_txt":"2020-03-27 03:00:00"},{"dt":1585288800,"main":{"temp":3.66,"feels_like":-1.32,"temp_min":3.66,"temp_max":3.66,"pressure":1024,"sea_level":1024,"grnd_level":1019,"humidity":74,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":85},"wind":{"speed":4.17,"deg":79},"sys":{"pod":"d"},"dt_txt":"2020-03-27 06:00:00"},{"dt":1585299600,"main":{"temp":8.42,"feels_like":3.67,"temp_min":8.42,"temp_max":8.42,"pressure":1024,"sea_level":1024,"grnd_level":1018,"humidity":59,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":4.14,"deg":84},"sys":{"pod":"d"},"dt_txt":"2020-03-27 09:00:00"},{"dt":1585310400,"main":{"temp":12.42,"feels_like":7.99,"temp_min":12.42,"temp_max":12.42,"pressure":1022,"sea_level":1022,"grnd_level":1017,"humidity":50,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":20},"wind":{"speed":4,"deg":78},"sys":{"pod":"d"},"dt_txt":"2020-03-27 12:00:00"},{"dt":1585321200,"main":{"temp":13.05,"feels_like":8.7,"temp_min":13.05,"temp_max":13.05,"pressure":1021,"sea_level":1021,"grnd_level":1016,"humidity":50,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":68},"wind":{"speed":4.03,"deg":73},"sys":{"pod":"d"},"dt_txt":"2020-03-27 15:00:00"},{"dt":1585332000,"main":{"temp":9.31,"feels_like":5.47,"temp_min":9.31,"temp_max":9.31,"pressure":1021,"sea_level":1021,"grnd_level":1016,"humidity":65,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":84},"wind":{"speed":3.36,"deg":67},"sys":{"pod":"n"},"dt_txt":"2020-03-27 18:00:00"},{"dt":1585342800,"main":{"temp":7.14,"feels_like":3.85,"temp_min":7.14,"temp_max":7.14,"pressure":1022,"sea_level":1022,"grnd_level":1017,"humidity":72,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":85},"wind":{"speed":2.42,"deg":69},"sys":{"pod":"n"},"dt_txt":"2020-03-27 21:00:00"},{"dt":1585353600,"main":{"temp":5.66,"feels_like":2.61,"temp_min":5.66,"temp_max":5.66,"pressure":1022,"sea_level":1022,"grnd_level":1016,"humidity":79,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":62},"wind":{"speed":2.04,"deg":50},"sys":{"pod":"n"},"dt_txt":"2020-03-28 00:00:00"},{"dt":1585364400,"main":{"temp":4.53,"feels_like":1.5,"temp_min":4.53,"temp_max":4.53,"pressure":1021,"sea_level":1021,"grnd_level":1015,"humidity":83,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.92,"deg":44},"sys":{"pod":"n"},"dt_txt":"2020-03-28 03:00:00"},{"dt":1585375200,"main":{"temp":4.84,"feels_like":2.05,"temp_min":4.84,"temp_max":4.84,"pressure":1021,"sea_level":1021,"grnd_level":1015,"humidity":82,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.6,"deg":38},"sys":{"pod":"d"},"dt_txt":"2020-03-28 06:00:00"},{"dt":1585386000,"main":{"temp":10.2,"feels_like":7.71,"temp_min":10.2,"temp_max":10.2,"pressure":1020,"sea_level":1020,"grnd_level":1015,"humidity":61,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.41,"deg":18},"sys":{"pod":"d"},"dt_txt":"2020-03-28 09:00:00"},{"dt":1585396800,"main":{"temp":14.11,"feels_like":11.78,"temp_min":14.11,"temp_max":14.11,"pressure":1019,"sea_level":1019,"grnd_level":1014,"humidity":47,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.18,"deg":347},"sys":{"pod":"d"},"dt_txt":"2020-03-28 12:00:00"},{"dt":1585407600,"main":{"temp":14.61,"feels_like":11.91,"temp_min":14.61,"temp_max":14.61,"pressure":1017,"sea_level":1017,"grnd_level":1012,"humidity":43,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.5,"deg":323},"sys":{"pod":"d"},"dt_txt":"2020-03-28 15:00:00"},{"dt":1585418400,"main":{"temp":11.4,"feels_like":8.37,"temp_min":11.4,"temp_max":11.4,"pressure":1018,"sea_level":1018,"grnd_level":1012,"humidity":58,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":18},"wind":{"speed":2.29,"deg":317},"sys":{"pod":"n"},"dt_txt":"2020-03-28 18:00:00"},{"dt":1585429200,"main":{"temp":9.2,"feels_like":5.91,"temp_min":9.2,"temp_max":9.2,"pressure":1018,"sea_level":1018,"grnd_level":1013,"humidity":72,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":36},"wind":{"speed":2.93,"deg":5},"sys":{"pod":"n"},"dt_txt":"2020-03-28 21:00:00"},{"dt":1585440000,"main":{"temp":7.62,"feels_like":4.41,"temp_min":7.62,"temp_max":7.62,"pressure":1017,"sea_level":1017,"grnd_level":1012,"humidity":72,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":61},"wind":{"speed":2.41,"deg":341},"sys":{"pod":"n"},"dt_txt":"2020-03-29 00:00:00"},{"dt":1585450800,"main":{"temp":6.35,"feels_like":2.32,"temp_min":6.35,"temp_max":6.35,"pressure":1017,"sea_level":1017,"grnd_level":1011,"humidity":76,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":93},"wind":{"speed":3.47,"deg":326},"sys":{"pod":"n"},"dt_txt":"2020-03-29 03:00:00"},{"dt":1585461600,"main":{"temp":4.73,"feels_like":0.47,"temp_min":4.73,"temp_max":4.73,"pressure":1017,"sea_level":1017,"grnd_level":1012,"humidity":75,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":95},"wind":{"speed":3.39,"deg":316},"sys":{"pod":"d"},"dt_txt":"2020-03-29 06:00:00"},{"dt":1585472400,"main":{"temp":7.81,"feels_like":3.6,"temp_min":7.81,"temp_max":7.81,"pressure":1018,"sea_level":1018,"grnd_level":1012,"humidity":64,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":3.49,"deg":328},"sys":{"pod":"d"},"dt_txt":"2020-03-29 09:00:00"},{"dt":1585483200,"main":{"temp":7.33,"feels_like":0.94,"temp_min":7.33,"temp_max":7.33,"pressure":1019,"sea_level":1019,"grnd_level":1014,"humidity":73,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":100},"wind":{"speed":6.93,"deg":16},"rain":{"3h":0.19},"sys":{"pod":"d"},"dt_txt":"2020-03-29 12:00:00"},{"dt":1585494000,"main":{"temp":2.98,"feels_like":-5.02,"temp_min":2.98,"temp_max":2.98,"pressure":1020,"sea_level":1020,"grnd_level":1015,"humidity":78,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":100},"wind":{"speed":8.49,"deg":31},"snow":{"3h":0.14},"sys":{"pod":"d"},"dt_txt":"2020-03-29 15:00:00"},{"dt":1585504800,"main":{"temp":0.4,"feels_like":-8.1,"temp_min":0.4,"temp_max":0.4,"pressure":1023,"sea_level":1023,"grnd_level":1017,"humidity":92,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":100},"wind":{"speed":9.16,"deg":33},"snow":{"3h":0.34},"sys":{"pod":"n"},"dt_txt":"2020-03-29 18:00:00"},{"dt":1585515600,"main":{"temp":0.31,"feels_like":-6.94,"temp_min":0.31,"temp_max":0.31,"pressure":1025,"sea_level":1025,"grnd_level":1020,"humidity":88,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":100},"wind":{"speed":7.23,"deg":36},"snow":{"3h":0.1},"sys":{"pod":"n"},"dt_txt":"2020-03-29 21:00:00"},{"dt":1585526400,"main":{"temp":-0.24,"feels_like":-6.84,"temp_min":-0.24,"temp_max":-0.24,"pressure":1026,"sea_level":1026,"grnd_level":1021,"humidity":88,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":6.2,"deg":31},"sys":{"pod":"n"},"dt_txt":"2020-03-30 00:00:00"},{"dt":1585537200,"main":{"temp":-1.17,"feels_like":-7.21,"temp_min":-1.17,"temp_max":-1.17,"pressure":1026,"sea_level":1026,"grnd_level":1021,"humidity":87,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":71},"wind":{"speed":5.21,"deg":23},"sys":{"pod":"n"},"dt_txt":"2020-03-30 03:00:00"},{"dt":1585548000,"main":{"temp":-0.66,"feels_like":-6.8,"temp_min":-0.66,"temp_max":-0.66,"pressure":1026,"sea_level":1026,"grnd_level":1021,"humidity":87,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":43},"wind":{"speed":5.45,"deg":23},"sys":{"pod":"d"},"dt_txt":"2020-03-30 06:00:00"},{"dt":1585558800,"main":{"temp":1.42,"feels_like":-4.41,"temp_min":1.42,"temp_max":1.42,"pressure":1027,"sea_level":1027,"grnd_level":1021,"humidity":78,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":88},"wind":{"speed":5.1,"deg":29},"snow":{"3h":0.17},"sys":{"pod":"d"},"dt_txt":"2020-03-30 09:00:00"},{"dt":1585569600,"main":{"temp":4.23,"feels_like":-2.2,"temp_min":4.23,"temp_max":4.23,"pressure":1026,"sea_level":1026,"grnd_level":1021,"humidity":58,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":94},"wind":{"speed":5.73,"deg":31},"snow":{"3h":0.16},"sys":{"pod":"d"},"dt_txt":"2020-03-30 12:00:00"}],"city":{"id":2950159,"name":"Berlin","coord":{"lat":52.5244,"lon":13.4105},"country":"DE","population":1000000,"timezone":3600,"sunrise":1585112181,"sunset":1585157277}}'));
      }, 1000);
  }, []);

  return (
    <Fragment>
      {weather.cod !== "200" ?
        <Loader />
        :
        <Fragment>
          <Title {...weather.city}></Title>
          <BoxContainer list={weather.list} />
        </ Fragment>
      }
    </ Fragment>
  );
};

export default App;
