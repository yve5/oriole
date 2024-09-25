import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../header/resources/logo.webp';
import { BoxArrowRight } from '../../icons';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      // style={{ width: expanded ? '200px' : '100px' }}
      className="d-flex flex-column border-end"
    >
      <ul className="flex-grow-1 nav nav-pills flex-column mb-auto p-3">
        <li className="nav-item">
          <Link to="/" className="nav-link active">
            <BoxArrowRight />
            {expanded ? 'Paging' : ''}
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/buttons" className="nav-link">
            <BoxArrowRight />
            {expanded ? 'Buttons' : ''}
          </Link>
        </li>
      </ul>

      <ul className="nav nav-pills flex-column mb-auto p-3">
        <li className="nav-item">
          <button
            type="button"
            className="nav-link"
            onClick={() => setExpanded(!expanded)}
          >
            <BoxArrowRight />
            {expanded ? 'Expand' : ''}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
