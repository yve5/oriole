import React from 'react';
import { clsx } from 'clsx';
import { I18n } from '../../../shared/i18n';
import { formatDate } from '../../../shared/i18n/utils';

const Footer = () => (
  <footer
    className={clsx(
      'd-flex',
      'flex-wrap',
      'justify-content-around',
      'align-items-center',
      'py-2',
      'footer__border'
    )}
  >
    <p className={clsx('col-md-2', 'mb-0', 'p-2', 'text-body-secondary')}>
      &copy; Oriole, {formatDate(new Date(), 'y')}
    </p>

    <ul
      className={clsx(
        'nav',
        'col-md-6',
        'col-xl-4',
        'justify-content-center',
        'justify-content-md-end'
      )}
    >
      <li className={clsx('nav-item')}>
        <button
          type="button"
          className={clsx('nav-link', 'p-2', 'text-body-secondary')}
        >
          <I18n>About us</I18n>
        </button>
      </li>
      <li className={clsx('nav-item')}>
        <button
          type="button"
          className={clsx('nav-link', 'p-2', 'text-body-secondary')}
        >
          <I18n>Changelog</I18n>
        </button>
      </li>
    </ul>
  </footer>
);

export default Footer;
