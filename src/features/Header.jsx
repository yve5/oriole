import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
    <div className="container-fluid">
      <div className="navbar-brand">
        <img loading="lazy" alt="Oriole" height="16" width="16" src={Logo} />
      </div>

      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Paging
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/buttons">
              Buttons
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
