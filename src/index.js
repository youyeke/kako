import React from 'react';
import Kako from './Kako';
import ReactDOM from 'react-dom';
import demoConfig from './demoConfig';

import 'antd/dist/antd.css';
import './index.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Kako config={ demoConfig } />, document.getElementById('root'));
serviceWorker.unregister();