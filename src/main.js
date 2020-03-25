import { h, render } from 'preact';
import AppContainer from './containers/App';

import '../node_modules/reset-css/reset.css';
import './styles.css';

const mountNode = document.getElementById('app');

render(<AppContainer />, mountNode, mountNode.lastChild);
