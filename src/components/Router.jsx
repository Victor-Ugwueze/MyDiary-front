// react libraries
import React from 'react';

// third-party libraries
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// components
import LandingPage from '../containers/landing-page/landingPage';
import NotFound from './NotFound';


const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch >
      <Route exact path='/' component={LandingPage}/>
      <Route component={NotFound} />
    </Switch>
  </Router>
);
export default AppRouter;
