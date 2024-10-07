import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, ReactReduxContext } from 'react-redux';

import App from './App';
import store from './config/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App context={ReactReduxContext} />
    </React.StrictMode>
  </Provider>
);
