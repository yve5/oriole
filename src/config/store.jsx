import { thunk } from 'redux-thunk';
// import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';

import createRootReducers from './reducers';

// export const history = createBrowserHistory();

const store = createStore(
  createRootReducers(),
  compose(applyMiddleware(thunk))
);

export default store;
