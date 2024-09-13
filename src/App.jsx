import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Paging from './routes/Paging';
import Buttons from './routes/Buttons';
import Layout from './features/Layout';

import './styles.scss';

const App = () => (
  <HashRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Paging />} />
        <Route path="buttons" element={<Buttons />} />
      </Route>
    </Routes>
  </HashRouter>
);

export default App;
