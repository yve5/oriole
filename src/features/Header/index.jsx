import React from 'react';
import Logo from '../../assets/logo.svg';

const Header = () => (
  <>
    {/*
    <nav
      className="navbar bg-dark border-bottom border-body mb-3"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <span className="navbar-brand">
          <img
            className="d-inline-block align-text-top me-2"
            height="24"
            width="30"
            alt="Logo"
            src={Logo}
          />
          Oriole
        </span>
      </div>
    </nav>
    */}

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container-fluid">
        <div className="navbar-brand">
          <img loading="lazy" alt="Oriole" height="16" width="16" src={Logo} />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="nav-link active" aria-current="page">
                Home
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">Features</span>
            </li>
            <li className="nav-item">
              <span className="nav-link">Pricing</span>
            </li>
            <li className="nav-item">
              <span className="nav-link disabled" aria-disabled="true">
                Disabled
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
);

export default Header;
