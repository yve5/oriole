import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Layout from './features/layout';
import { APP_ROUTES } from './config/routes';

import './styles/App.scss';

const App = () => (
  <HashRouter>
    <Layout>
      <Switch>
        {APP_ROUTES.map(({ path, component, exact }) => (
          <Route key={path} path={path} exact={!!exact}>
            {component}
          </Route>
        ))}
      </Switch>
    </Layout>
  </HashRouter>
);

export default App;
