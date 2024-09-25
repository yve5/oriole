import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import Header from '../../header';

const Layout = () => (
  <>
    <Header />

    <div className="d-flex">
      <Sidebar />

      <div className="container mt-4">
        <Outlet />
      </div>
    </div>
  </>
);

export default Layout;
