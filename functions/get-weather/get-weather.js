/* eslint-disable */
require('dotenv').config();
const fetch = require('node-fetch');
const IPinfo = require("node-ipinfo");
const ipinfo = new IPinfo(process.env.IP_INFO_TOKEN);

exports.handler = async function(event) {
  let ip = event.headers['client-ip'];
  if (ip === '127.0.0.1' || ip === '::1') {
    ip = '95.91.244.89';
  }

  try {
    const { _city, _countryCode } = await ipinfo.lookupIp(ip);
    if (!_city || !_countryCode) {
      return {
        statusCode: 200,
        body: 'Could not get location'
      }
    }
    const weather = await
        fetch(`http://api.openweathermap.org/data/2.5/forecast/?q=${_city},${_countryCode}&APPID=${process.env.OPEN_WEATHER_TOKEN}&units=metric`)
        .then(x => x.json());
    return {
      statusCode: 200,
      body: JSON.stringify(weather)
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
