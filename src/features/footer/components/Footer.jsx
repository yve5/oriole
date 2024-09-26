import React from 'react';

const Footer = () => (
  <footer className="d-flex flex-wrap justify-content-around align-items-center py-2 border-top">
    <p className="col-md-4 mb-0 p-2 text-body-secondary">© Oriole, 2024</p>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item">
        <button type="button" className="nav-link p-2 text-body-secondary">
          About us
        </button>
      </li>
      <li className="nav-item">
        <button type="button" className="nav-link p-2 text-body-secondary">
          Changelog
        </button>
      </li>
    </ul>
  </footer>
);

export default Footer;
