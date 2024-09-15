import React, { Fragment } from 'react';
import Confetti from 'canvas-confetti';

import { ORIOLE_BUTTONS } from '../constants';

const ButtonLayer = ({ className = '' }) => (
  <div className="card mb-4">
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        {ORIOLE_BUTTONS.map(({ title, suffix }) => (
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
          {ORIOLE_BUTTONS.map(({ title, suffix }) => (
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
