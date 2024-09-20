import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Paging from './routes/paging';
import Buttons from './routes/buttons';
import Layout from './features/layout';

import Hello from './Hello';

import './styles.scss';

const App = () => (
  <HashRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Paging />} />
        <Route path="buttons" element={<Buttons />} />
      </Route>
    </Routes>

    <Hello />
  </HashRouter>
);

export default App;
