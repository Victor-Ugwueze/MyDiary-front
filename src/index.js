// react libraries
import React from 'react';
import ReactDOM from 'react-dom';

// third party libraries
import { Provider } from 'react-redux';

// state
import configureStore from './store/configureStore';

// action
import { authenticate, logout } from './actions/auth/auth';

// compoents
import App from './components/Router';

// helpers
import authHelper from './helpers/auth';

// styles
import './styles/index.scss';

const store = configureStore();
const token = localStorage.getItem('token');
const checker = authHelper.validateToken(token);
if (checker) {
  const user = localStorage.getItem('user');
  store.dispatch(authenticate(JSON.parse(user), token));
} else {
  store.dispatch(logout());
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
