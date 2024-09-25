import React from 'react';

const Footer = () => (
  <footer className="d-flex flex-wrap justify-content-around align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-body-secondary">© 2024 Company, Inc</p>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item">
        <button type="button" className="nav-link px-2 text-body-secondary">
          Home
        </button>
      </li>
      <li className="nav-item">
        <button type="button" className="nav-link px-2 text-body-secondary">
          Features
        </button>
      </li>
      <li className="nav-item">
        <button type="button" className="nav-link px-2 text-body-secondary">
          Pricing
        </button>
      </li>
      <li className="nav-item">
        <button type="button" className="nav-link px-2 text-body-secondary">
          FAQs
        </button>
      </li>
      <li className="nav-item">
        <button type="button" className="nav-link px-2 text-body-secondary">
          About
        </button>
      </li>
    </ul>
  </footer>
);

export default Footer;
