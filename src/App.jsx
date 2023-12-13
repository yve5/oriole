import { Fragment } from 'react';
import Confetti from 'canvas-confetti';

import Logo from './assets/react.svg';
import './styles.scss';

const buttons = [
  { title: 'Primary', suffix: 'primary' },
  { title: 'Secondary', suffix: 'outline-secondary' },
  { title: 'Success', suffix: 'success' },
  { title: 'Danger', suffix: 'danger' },
  { title: 'Warning', suffix: 'warning' },
  { title: 'Info', suffix: 'info' },
  { title: 'Light', suffix: 'outline-light' },
  { title: 'Dark', suffix: 'dark' },
  { title: 'Link', suffix: 'link' },
  // { title: 'Outline Primary', suffix: 'outline-primary' },
  // { title: 'Outline Secondary', suffix: 'outline-secondary' },
  // { title: 'Outline Success', suffix: 'outline-success' },
  // { title: 'Outline Danger', suffix: 'outline-danger' },
  // { title: 'Outline Warning', suffix: 'outline-warning' },
  // { title: 'Outline Info', suffix: 'outline-info' },
  // { title: 'Outline Light', suffix: 'outline-light' },
  // { title: 'Outline Dark', suffix: 'outline-dark' },
  // { title: 'Outline Link', suffix: 'outline-link' },
];

const App = () => (
  <>
    <nav
      className="navbar bg-dark border-bottom border-body mb-3"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <span className="navbar-brand">
          <img
            className="d-inline-block align-text-top"
            height="24"
            width="30"
            alt="Logo"
            src={Logo}
          />
          Oriole
        </span>
      </div>
    </nav>

    <div className="container">
      <div className="card">
        <div className="card-header">Buttons</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {buttons.map(({ title, suffix }) => (
              <button
                className={`btn btn-${suffix} me-2 mb-2`}
                onClick={() =>
                  Confetti({
                    particleCount: 100,
                    origin: { y: 0.6 },
                    spread: 70,
                  })
                }
                type="button"
                key={suffix}
              >
                {title}
              </button>
            ))}
          </li>
          <li className="list-group-item bg-light-subtle">
            <code>
              {buttons.map(({ title, suffix }) => (
                <Fragment key={suffix}>
                  &lt;button className=&quot;btn btn-{suffix}&quot;
                  type=&quot;button&quot;&gt;
                  {title}&lt;/button&gt;
                  <br />
                </Fragment>
              ))}
            </code>
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default App;
