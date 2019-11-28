import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Spot from './components/spot';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Spot />, document.getElementById('root'));
serviceWorker.unregister();
