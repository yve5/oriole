import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/logo.webp';
import ThemeButton from './ThemeButton';

const Header = () => (
  <header>
    <div className="px-3 py-2 mb-4 text-bg-dark border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-start">
          <Link
            to="/"
            className="d-flex align-items-center my-2 my-md-0 me-md-auto text-white text-decoration-none"
          >
            <img src={Logo} alt="Oriale" title="Oriale" />
          </Link>

          <ul className="nav col-12 col-md-auto my-2 justify-content-center my-md-0 text-small">
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
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-box-arrow-right"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
