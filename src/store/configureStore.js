import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';

import homeReducer from '../containers/HomePage/reducer';

/* eslint-disable no-underscore-dangle, indent */
const composeEnhancers = process.env.NODE_ENV !== 'production'
&& typeof window === 'object'
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

export default () => {
  const store = createStore(
    combineReducers({
      home: homeReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
