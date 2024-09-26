import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../../footer';
import Header from '../../header';
import Sidebar from '../../sidebar';

const Layout = () => (
  <div className="d-flex flex-column h-100">
    <Header />

    <div className="d-flex flex-grow-1">
      <Sidebar />

      <div className="flex-grow-1 d-flex flex-column oriole__overflow">
        <div className="p-2 flex-grow-1 container mt-4">
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  </div>
);

export default Layout;
