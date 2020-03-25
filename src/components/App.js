import { h, Fragment } from 'preact'

import Loader from './Loader';
import Title from './Title';
import BoxContainer from '../containers/Box';

const App = ({ weather }) => {
  console.log(weather);
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
