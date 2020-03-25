import { h } from 'preact';

const Box = ({ weather, main, dt, ...rest }) => {
  const { icon, description } = weather[0];
  const { temp, feels_like } = main;

  return (<article className="box_item">
    <img alt={description} src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
    <div className="box_content">{new Date(dt * 1000).toLocaleTimeString()}</div>
    <div className="box_content">{temp} °C</div>
    <div className="box_content">{weather[0].main}</div>
    <div className="box_content"><small>feels like {feels_like} °C</small></div>
  </article>)
}

export default Box;
