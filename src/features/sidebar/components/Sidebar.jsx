import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BoxArrowRight } from '../../icons';

const links = [
  { route: '/', title: 'Paging', active: true },
  { route: '/buttons', title: 'Buttons' },
  { route: '/buttons', title: 'Something really long' },
];

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const size = expanded ? 20 : 24;

  return (
    <div className="d-none d-lg-flex flex-column border-end">
      <ul
        className={`flex-grow-1 nav nav-pills flex-column mb-auto ${
          expanded ? 'p-2' : 'text-center'
        }`}
      >
        {links.map(({ active, route, title }) => (
          <li className="nav-item" key={title}>
            <Link
              to={route}
              className={`nav-link${
                expanded ? '' : ' py-3 border-bottom rounded-0'
              }${active ? ' active' : ''}`}
            >
              <BoxArrowRight width={size} height={size} />
              {expanded && title}
            </Link>
          </li>
        ))}
      </ul>

      <ul
        className={`nav nav-pills flex-column mb-auto ${
          expanded ? 'p-3' : 'text-center'
        }`}
      >
        <li className="nav-item">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className={`nav-link${expanded ? '' : ' py-3 rounded-0'}`}
          >
            <BoxArrowRight width={size} height={size} />
            {expanded && 'Collapse'}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
