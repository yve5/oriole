import React, { Fragment } from 'react';
import Confetti from 'canvas-confetti';
import { clsx } from 'clsx';

import { ORIOLE_BUTTONS } from '../resources/constants';

const ButtonLayer = ({ className = '' }) => (
  <div className={clsx('card', 'mb-4')}>
    <ul className={clsx('list-group', 'list-group-flush')}>
      <li className={clsx('list-group-item')}>
        {ORIOLE_BUTTONS.map(({ title, suffix }) => (
          <button
            key={suffix}
            type="button"
            className={clsx('btn', `btn-${suffix}`, 'me-2', 'mb-2', className)}
            onClick={() =>
              Confetti({ spread: 70, origin: { y: 0.6 }, particleCount: 100 })
            }
          >
            {title}
          </button>
        ))}
      </li>
      <li className={clsx('list-group-item', 'bg-light-subtle')}>
        <code>
          {ORIOLE_BUTTONS.map(({ title, suffix }) => (
            <Fragment key={suffix}>
              &lt;button className=&quot;btn btn-{suffix} {className}&quot;
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
    <ButtonLayer className={clsx('btn-sm')} />
    <ButtonLayer className={clsx('btn-sm', 'disabled')} />
  </>
);

export default Buttons;
