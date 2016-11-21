import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, IndexLink, hashHistory } from 'react-router';
import App from './components/App';



ReactDOM.render(
  <App />,
  document.body.appendChild(document.createElement('div'))
);
