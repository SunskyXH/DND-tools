import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, IndexLink, hashHistory } from 'react-router';
import App from './components/App';
import BuildCard from './components/BuildCard';



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/"  >
      <IndexRoute component={App} />
      <Route path="BuildCard" component={BuildCard} />
    </Route>
  </Router>,
  document.body.appendChild(document.createElement('div'))
);
