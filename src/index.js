// react libraries
import React from 'react';
import ReactDOM from 'react-dom';

// third party libraries
import { Provider } from 'react-redux';

// state
import configureStore from './store/configureStore';

// action
import { sampleAction } from './actions/sample';
// compoents
import App from './components/App';

const store = configureStore();
store.dispatch(sampleAction());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
