import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

import * as AllIcons from '../../icons';
import { I18n } from '../../../shared/i18n';
import { SIDEBAR_LINKS } from '../resources/constants';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const size = expanded ? 20 : 24;
  const CollapseIcon = AllIcons[expanded ? 'ChevronLeft' : 'ChevronRight'];

  return (
    <div className={clsx('d-none', 'd-lg-flex', 'flex-column', 'border-end')}>
      <ul
        className={clsx(
          'flex-grow-1',
          'nav',
          'nav-pills',
          'flex-column',
          'mb-auto',
          expanded ? 'p-2' : 'text-center'
        )}
      >
        {SIDEBAR_LINKS.map(({ active, icon, route, title }) => {
          const Icon = AllIcons[icon];

          return (
            <li key={title} className={clsx('nav-item')}>
              <Link
                to={route}
                className={clsx(
                  'nav-link',
                  !expanded && ['py-3', 'border-bottom', 'rounded-0'],
                  { active }
                )}
              >
                <I18n title>
                  <Icon
                    width={size}
                    height={size}
                    title={title}
                    className={clsx({ 'me-2': expanded })}
                  />
                </I18n>
                {expanded && <I18n>{title}</I18n>}
              </Link>
            </li>
          );
        })}
      </ul>

      <ul
        className={clsx(
          'nav',
          'nav-pills',
          'flex-column',
          'mb-auto',
          expanded ? 'p-3' : 'text-center'
        )}
      >
        <li className="nav-item">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className={clsx('nav-link', !expanded && ['py-3', 'rounded-0'])}
          >
            <CollapseIcon
              width={size}
              height={size}
              className={clsx({ 'me-2': expanded })}
            />

            {expanded ? (
              <I18n>Collapse</I18n>
            ) : (
              <div className={clsx('d-none')}>
                <I18n>Expand</I18n>
              </div>
            )}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
