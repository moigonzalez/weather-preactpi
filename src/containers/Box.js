import { h } from 'preact';

import BoxComponent from '../components/Box';

const Box = ({ list }) =>
  <section className="box_container">{list.splice(0, 4).map(item => <BoxComponent {...item} />)}</section>;

export default Box;
