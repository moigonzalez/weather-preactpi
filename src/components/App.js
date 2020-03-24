import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks';

const App = () => {
  const [location, setLocation] = useState('');

  useEffect(() => {
    fetch('/.netlify/functions/get-location')
      .then(x => x.text())
      .then(res => setLocation(res));
  }, []);

  return (<h1>{location}</h1>);z
};

export default App;
