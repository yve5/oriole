import React from 'react';
import { Outlet } from 'react-router-dom';

// import Sidebar from './Sidebar';
import Header from '../../header';

const Layout = () => (
  <>
    <Header />
    {/* <Sidebar /> */}

    <div className="container">
      <Outlet />
    </div>
  </>
);

export default Layout;
