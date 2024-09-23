import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../header/resources/logo.webp';
import { BoxArrowRight } from '../../icons';

const Sidebar = () => (
  <div
    className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
    style={{ width: '280px' }}
  >
    <Link
      to="/"
      className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
    >
      <img src={Logo} alt="Oriale" title="Oriale" />
      <span className="fs-4">Sidebar</span>
    </Link>

    <hr />

    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link to="/" className="nav-link active">
          <BoxArrowRight />
          Home
        </Link>

        <Link to="/" className="nav-link text-white">
          <BoxArrowRight />
          Dashboard
        </Link>

        {/*
<a href="#" className="nav-link active" aria-current="page">
<svg className="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
Home
</a>
</li>
<li>
<a href="#" className="nav-link text-white">
<svg className="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
Dashboard
</a>
</li>
<li>
<a href="#" className="nav-link text-white">
<svg className="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
Orders
</a>
</li>
<li>
<a href="#" className="nav-link text-white">
<svg className="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
Products
</a>
</li>
<li>
<a href="#" className="nav-link text-white">
<svg className="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
Customers
</a>
      */}
      </li>
    </ul>

    {/*
    <hr>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2">
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
        */}
  </div>
);

export default Sidebar;
