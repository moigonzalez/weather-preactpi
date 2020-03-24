/* eslint-disable */
require('dotenv').config();
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

    return {
      statusCode: 200,
      body: `Your IP address is: ${ip}, your city is: ${_city} with country code: ${_countryCode}`
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
