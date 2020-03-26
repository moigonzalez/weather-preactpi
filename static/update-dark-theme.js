onmessage = ({ data }) => {
  const { sunrise, sunset } = JSON.parse(data);

  setTimeout(() => {
    if (sunrise < sunset) {
      postMessage('day');
    } else {
      postMessage('night');
    }
  }, Math.min(sunrise, sunset) * 1000);
};
