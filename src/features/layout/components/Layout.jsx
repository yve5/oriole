import React from 'react';
import { clsx } from 'clsx';
import { Outlet } from 'react-router-dom';

import Footer from '../../footer';
import Header from '../../header';
import Sidebar from '../../sidebar';

const Layout = () => (
  <div className={clsx('d-flex', 'flex-column', 'h-100')}>
    <Header />

    <div className={clsx('d-flex', 'flex-grow-1')}>
      <Sidebar />

      <div
        className={clsx(
          'd-flex',
          'flex-grow-1',
          'flex-column',
          'oriole__overflow'
        )}
      >
        <div className={clsx('p-2', 'flex-grow-1', 'container')}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  </div>
);

export default Layout;
