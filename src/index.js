import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Router history={Router.hashHistory}>
    <Route path="/" component={App} />
  </Router>,
document.getElementById('root'));
registerServiceWorker();
