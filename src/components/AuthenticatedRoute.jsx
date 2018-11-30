// react libraries
import React from 'react';

// third party library
import { Route, Redirect } from 'react-router-dom';

// helpers
import Auth from '../helpers/auth';

/**
 * @desc renders header with links
 * @returns {object} route
 */
const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (Auth.validateToken(localStorage.getItem('token')) ? (
        <Component {...props} />
    ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
    ))
    }
  />
);

export default AuthenticatedRoute;
