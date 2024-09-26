import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../resources/logo.webp';
import ThemeButton from '../../../shared/themeButton';

import { BoxArrowRight } from '../../icons';

const Header = () => (
  <header>
    <div className="px-3 py-2 text-bg-dark border-bottom">
      <div className="d-flex align-items-center justify-content-between">
        <Link
          to="/"
          className="d-flex align-items-center my-2 my-sm-0 me-sm-auto text-white text-decoration-none"
        >
          <img src={Logo} alt="Oriale" title="Oriale" className="app-logo" />
        </Link>

        <ul className="nav col-12qwe col-sm-autoqwe col-sm-auto my-2 justify-content-center my-sm-0 text-small">
          <li>
            <button
              type="button"
              className="nav-link text-secondary text-white"
            >
              en
            </button>
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
  </header>
);

export default Header;
