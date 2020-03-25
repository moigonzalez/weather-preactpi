import { h, render } from 'preact';
import App from './components/App';

import '../node_modules/reset-css/reset.css';
import './styles.css';

const mountNode = document.getElementById('app');

render(<App />, mountNode, mountNode.lastChild);
