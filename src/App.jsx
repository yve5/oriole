import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Paging from './routes/paging';
import I18nPage from './routes/i18n';
import Buttons from './routes/buttons';
import Layout from './features/layout';

import './styles/App.scss';

const App = () => (
  <HashRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Paging />} />
        <Route path="buttons" element={<Buttons />} />
        <Route path="i18n" element={<I18nPage />} />
      </Route>
    </Routes>
  </HashRouter>
);

export default App;
