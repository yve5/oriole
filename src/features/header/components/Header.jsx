import React from 'react';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

import Logo from '../resources/logo.webp';
import Theme from '../../../shared/theme';

import { Logout } from '../../icons';
import { LangSwitch } from '../../../shared/i18n';

const Header = () => (
  <header>
    <div className={clsx('px-3', 'py-2', 'text-bg-dark', 'border-bottom')}>
      <div
        className={clsx(
          'd-flex',
          'align-items-center',
          'justify-content-between'
        )}
      >
        <Link
          to="/"
          className={clsx(
            'd-flex',
            'align-items-center',
            'my-2',
            'my-sm-0',
            'me-sm-auto',
            'text-white',
            'text-decoration-none'
          )}
        >
          <img
            src={Logo}
            alt="Oriale"
            title="Oriale"
            className={clsx('app-logo')}
          />
        </Link>

        <ul
          className={clsx(
            'nav',
            'col-sm-auto',
            'justify-content-center',
            'text-small',
            'my-2',
            'my-sm-0'
          )}
        >
          <li>
            <LangSwitch
              className={clsx('nav-link', 'text-secondary', 'text-white')}
            />
          </li>
          <li>
            <Theme />
          </li>
          <li>
            <button
              type="button"
              title="Logout"
              className={clsx('nav-link', 'text-secondary', 'text-white')}
            >
              <Logout />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;
