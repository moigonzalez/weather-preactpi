import { h } from 'preact'

import SunriseLogo from './SunriseLogo.js';
import SunsetLogo from './SunsetLogo.js';
import LocationLogo from './LocationLogo.js';


const Title = ({ name, country, sunrise, sunset }) => (
  <header className="title_container">
    <h1 className="title_wrapper">
      <span className="title_logo"><SunriseLogo />{new Date(sunrise * 1000).toLocaleTimeString()}</span>
      <span className="title_headline"><LocationLogo /><br />{name}, {country}<br /><br />{new Date(sunrise * 1000).toLocaleDateString()} </span>
      <span className="title_logo"><SunsetLogo />{new Date(sunset * 1000).toLocaleTimeString()}</span>
    </h1>
  </header>
);

export default Title;
