import React, { Fragment } from 'react';
import Confetti from 'canvas-confetti';

const buttons = [
  { title: 'Primary', suffix: 'primary' },
  { title: 'Secondary', suffix: 'outline-secondary' },
  { title: 'Success', suffix: 'success' },
  { title: 'Danger', suffix: 'danger' },
  { title: 'Warning', suffix: 'warning' },
  { title: 'Info', suffix: 'info' },
  // { title: 'Light', suffix: 'outline-light' },
  // { title: 'Dark', suffix: 'dark' },
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

const ButtonLayer = ({ className = '' }) => (
  <div className="card mb-4">
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        {buttons.map(({ title, suffix }) => (
          <button
            key={suffix}
            type="button"
            data-testid="button-demo"
            className={`btn btn-${suffix} me-2 mb-2${
              className ? ` ${className}` : ''
            }`}
            onClick={() =>
              Confetti({ spread: 70, origin: { y: 0.6 }, particleCount: 100 })
            }
          >
            {title}
          </button>
        ))}
      </li>
      <li className="list-group-item bg-light-subtle">
        <code>
          {buttons.map(({ title, suffix }) => (
            <Fragment key={suffix}>
              &lt;button className=&quot;btn btn-{suffix}
              {className ? ` ${className}` : ''}&quot;
              type=&quot;button&quot;&gt;
              {title}&lt;/button&gt;
              <br />
            </Fragment>
          ))}
        </code>
      </li>
    </ul>
  </div>
);

const Buttons = () => (
  <>
    <ButtonLayer className="btn-sm" />
    <ButtonLayer className="btn-sm disabled" />
  </>
);

export default Buttons;
