import { h } from 'preact';

import Box from './Box';

const BoxContainer = ({ list }) =>
  <section className="box_container">{list.splice(0, 4).map(item => <Box {...item} />)}</section>;

export default BoxContainer;
