// 3rd party Libraries
import {
  createStore,
  compose,
  applyMiddleware
} from 'redux';
import {
  createLogger
} from 'redux-logger';

import createSaggerMiddleware from 'redux-saga';

// import thunk from 'redux-thunk';

// reducers
import rootReducer from '../reducers';

const logger = createLogger({
  collapsed: true,
});

const sagaMiddleware = createSaggerMiddleware();

/**
 * @desc setup redux store
 * @returns {object} store
 */
const configureStore = () => createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware, logger),
    typeof window === 'object'
    && typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f
  )
);

export default configureStore;
