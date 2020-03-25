onmessage = ({ data }) => {
  const end = new Date(data * 1000);
  const start = new Date();

  const timeDiff = Math.floor((end.getTime() - start.getTime()) / 1000);

  setTimeout(() => {
    postMessage('Update weather');
  }, timeDiff);
};
