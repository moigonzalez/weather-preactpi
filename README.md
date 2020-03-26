[![Netlify Status](https://api.netlify.com/api/v1/badges/562047c7-56cd-4d48-9682-6894a84fad6e/deploy-status)](https://app.netlify.com/sites/peaceful-northcutt-240a94/deploys)

# Weather-PreactPi ⛈

A tiny UI for daily weather forcasts

# Demo

TODO

# Dependencies

- [netlify-cli](https://docs.netlify.com/cli/get-started/#installation)
- [ip-info](https://ipinfo.io/)
- [OpenWeatherMap](https://openweathermap.org/)

# Install

1. Copy the environment files and change the token values

```
cp .env.dist .env
```

2. Install netlify-cli globally

```
npm install netlify-cli -g

netlify login
```

3. Install the project
```
npm install
```

# Start the development server

This will start serverless functions inside `/functions` using netlify and start a parcel development server

```
npm run dev
```
