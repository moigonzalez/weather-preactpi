/* eslint-disable */
const IPinfo = require("node-ipinfo");
const token = '';
const ipinfo = new IPinfo(token);

exports.handler = async function(event) {
  let ip = event.headers['client-ip'];

  if (ip === '127.0.0.1') {
    ip = '95.91.244.89';
  }

  console.log(ip);

  try {
    const response = await ipinfo.lookupIp(ip);

    console.log(response);

    return {
      statusCode: 200,
      body: `Your IP address ${response.city}`
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
