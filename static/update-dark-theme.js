onmessage = ({ data }) => {
  const { sunrise, sunset } = JSON.parse(data);
  const now = new Date().getTime();
  let end;
  const sunrise_t = sunrise * 1000;
  const sunset_t = sunset * 1000;

  if (now > sunrise_t && now > sunset_t) {
    return;
  }
  else if (now < (sunrise_t)) {
    end = new Date(sunrise_t);
  } else {
    end = new Date(sunset_t);
  }

  const timeDiff = Math.floor((end - now));

  console.log('next change', timeDiff);

  setTimeout(() => {
    if (now > sunset_t || now < sunrise_t) {
      postMessage('night');
    } else {
      postMessage('day');
    }

  }, timeDiff);
};
