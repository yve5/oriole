import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/logo.webp';

const Header = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;

    htmlElement.setAttribute('data-bs-theme', isDarkMode ? 'dark' : undefined);

    return () => {
      htmlElement.removeAttribute('data-bs-theme');
    };
  }, [isDarkMode]);

  return (
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
                <Link to="/" className="nav-link text-white" title="Home">
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
                <button
                  type="button"
                  title={isDarkMode ? 'Dark' : 'Light'}
                  onClick={() => setDarkMode(!isDarkMode)}
                  className="nav-link text-secondary text-white"
                >
                  {isDarkMode ? (
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-sun"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-moon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
                    </svg>
                  )}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  title="Logout"
                  className="nav-link text-secondary text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-box-arrow-right"
                    viewBox="0 0 16 16"
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
};

export default Header;
