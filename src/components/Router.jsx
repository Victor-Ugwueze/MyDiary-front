// react libraries
import React from 'react';

// third-party libraries
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// auth route

import AuthenticatedRoute from './AuthenticatedRoute';

// components
import LandingPage from '../containers/landing-page/landingPage';
import DashBoard from '../containers/dashboard/Dashboard';
import NotFound from './NotFound';
import Auth from '../containers/Auth';

const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <AuthenticatedRoute exact path='/dashboard' component={DashBoard} />
      <Route exact path='/logout' component={Auth} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
export default AppRouter;
