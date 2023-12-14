import Logo from '../../assets/logo.svg';

const Header = () => (
  <nav
    className="navbar bg-dark border-bottom border-body mb-3"
    data-bs-theme="dark"
  >
    <div className="container-fluid">
      <span className="navbar-brand">
        <img
          className="d-inline-block align-text-top me-2"
          height="24"
          width="30"
          alt="Logo"
          src={Logo}
        />
        Oriole
      </span>
    </div>
  </nav>
);

export default Header;
