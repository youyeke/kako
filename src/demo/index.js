import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Kako from '../Kako';
import demoConfig from './demoConfig';

import 'antd/dist/antd.css';
import './index.css';

import * as serviceWorker from './serviceWorker';

const App = (props) => <Kako { ...props } config={ demoConfig } />;

ReactDOM.render( (
  <Router>
    <Route path="/" component={ App }></Route>
  </Router>
)
, document.getElementById('root'));
serviceWorker.unregister();