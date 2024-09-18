import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/logo.webp';
import ThemeButton from './ThemeButton';

import { BoxArrowRight } from './icons';

const Header = () => (
  <header>
    <div className="px-3 py-2 mb-4 text-bg-dark border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-start">
          <Link
            to="/"
            className="d-flex align-items-center my-2 my-sm-0 me-sm-auto text-white text-decoration-none"
          >
            <img src={Logo} alt="Oriale" title="Oriale" className="app-logo" />
          </Link>

          <ul className="nav col-12 col-sm-auto my-2 justify-content-center my-sm-0 text-small">
            <li>
              <Link to="/" title="Home" className="nav-link text-white">
                Paging
              </Link>
            </li>
            <li>
              <Link
                title="Home"
                to="/buttons"
                className="nav-link text-secondary text-white"
              >
                Buttons
              </Link>
            </li>
            <li>
              <ThemeButton />
            </li>
            <li>
              <button
                type="button"
                title="Logout"
                className="nav-link text-secondary text-white"
              >
                <BoxArrowRight />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
