import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../header/resources/logo.webp';
import { BoxArrowRight } from '../../icons';

const Sidebar = () => (
  <div
    style={{ width: '280px' }}
    className="d-flexaze flex-columnaze flex-shrink-0aze p-3 bg-darkaze text-whiteaze border-end"
  >
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link to="/" className="nav-link active">
          <BoxArrowRight />
          Paging
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/buttons" className="nav-link">
          <BoxArrowRight />
          Buttons
        </Link>
      </li>
    </ul>

    <hr />

    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <button type="button" className="nav-link">
          <BoxArrowRight />
          Expand
        </button>
      </li>
    </ul>
  </div>
);

export default Sidebar;
