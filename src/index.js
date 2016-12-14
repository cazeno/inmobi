import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router'
import App from './views/App'
import Home from './views/body/Home'
import Advertisers from './views/body/Advertisers'
import BrandMarketing from './views/body/BrandMarketing'
import AboutUs from './views/body/AboutUs'

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='/advertisers' component={Advertisers} />
        <Route path='/advertisers/brand-marketing' component={BrandMarketing} />
        <Route path='/company' component={AboutUs} />
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
