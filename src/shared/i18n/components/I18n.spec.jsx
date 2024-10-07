import React from 'react';
import configureMockStore from 'redux-mock-store';

import { vi } from 'vitest';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import I18n from './I18n';
import en from '../dictionaries/en';
import fr from '../dictionaries/fr';

import { getInitialState } from '../utils';

const mockStore = configureMockStore([thunk]);
const defaultStore = mockStore({ i18n: getInitialState([fr, en]) });

describe('I18n', () => {
  beforeEach(() => {
    console.error = vi.fn();
  });

  it('should return a default answer', () => {
    const { asFragment } = render(
      <Provider store={defaultStore}>
        <I18n />
      </Provider>
    );
    const fragment = asFragment();
    expect(fragment.textContent).toBe('-');
  });

  it('should translate a string', () => {
    const { asFragment } = render(
      <Provider store={defaultStore}>
        <I18n>Hello World</I18n>
      </Provider>
    );
    const fragment = asFragment();
    expect(fragment.textContent).toBe('Bonjour le monde');
  });

  it('should translate an option', () => {
    const { asFragment } = render(
      <Provider store={defaultStore}>
        <I18n>
          <option value="42">Hello World</option>
        </I18n>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should handle an error with 2 options', () => {
    const error = () => {
      render(
        <Provider store={defaultStore}>
          <I18n>
            <option value="42">Hello World</option>
            <option value="42">Hello World</option>
          </I18n>
        </Provider>
      );
    };
    expect(error).toThrow('I18n can not translate several html tags in a row');
  });

  it('should handle an error with a wrong attribute array', () => {
    const error = () => {
      render(
        <Provider store={defaultStore}>
          <I18n attrs="Hello World">
            <img src="picture" alt="Hello World" title="Hello World" />
          </I18n>
        </Provider>
      );
    };
    expect(error).toThrow('I18n attributes are missing');
  });

  it('should handle an error with an empty attribute array', () => {
    const error = () => {
      render(
        <Provider store={defaultStore}>
          <I18n attrs={[]}>
            <img src="picture" alt="Hello World" title="Hello World" />
          </I18n>
        </Provider>
      );
    };
    expect(error).toThrow('I18n attributes are missing');
  });

  it('should translate attributes', () => {
    const { asFragment } = render(
      <Provider store={defaultStore}>
        <I18n attrs={['alt', 'title', 'hello']}>
          <img src="picture" alt="Hello World" title="Hello World" />
        </I18n>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should translate attributes with shortcuts', () => {
    const { asFragment } = render(
      <Provider store={defaultStore}>
        <I18n title>
          <img alt="Lorem ipsum..." src="picture" title="Hello World" />
        </I18n>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should translate an option with args', () => {
    const { asFragment } = render(
      <Provider store={defaultStore}>
        <I18n args={{ $days: '47' }}>
          <option value="42">Hello World</option>
        </I18n>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should translate a placeholder', () => {
    const { asFragment } = render(
      <Provider store={defaultStore}>
        <I18n placeholder>
          <input type="text" value="" placeholder="Hello World" />
        </I18n>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('I18n date parser', () => {
  const dateExample = new Date(2020, 2, 14, 13, 37, 14);

  it('should format a date', () => {
    const { asFragment } = render(
      <Provider store={defaultStore}>
        <I18n date={dateExample} />
      </Provider>
    );

    const fragment = asFragment();
    expect(fragment.textContent).toBe('14/03/2020');
  });

  it('should format a undefined date', () => {
    const { asFragment } = render(
      <Provider store={defaultStore}>
        <I18n date={undefined} />
      </Provider>
    );
    const fragment = asFragment();
    expect(fragment.textContent).toBe('-');
  });

  it('should format a date with a customized pattern', () => {
    const { asFragment } = render(
      <Provider store={defaultStore}>
        <I18n date={dateExample} format="PPp" />
      </Provider>
    );
    const fragment = asFragment();
    expect(fragment.textContent).toBe('14 mars 2020, 13:37');
  });

  it('should manage a weird case', () => {
    const { asFragment } = render(
      <Provider store={defaultStore}>
        <I18n date={dateExample}>Lorem ipsum</I18n>
      </Provider>
    );
    const fragment = asFragment();
    expect(fragment.textContent).toBe('14/03/2020');
  });

  const startExample = new Date(2017, 4, 14, 17, 51, 31);
  const updateExample = new Date(2020, 2, 14, 13, 37, 14);

  it('should format a date with expression & arguments', () => {
    const { asFragment } = render(
      <Provider store={defaultStore}>
        <I18n
          args={{
            $guest: 'John Doe',
            $start: { date: startExample, locale: 'fr' },
            $update: { date: updateExample, locale: 'fr' },
          }}
        >
          Update of $update, created at $start by $guest
        </I18n>
      </Provider>
    );
    const fragment = asFragment();
    expect(fragment.textContent).toBe(
      'Mise à jour le 14/03/2020, créé le 14/05/2017 par John Doe'
    );
  });

  it('should format a date with attributes & arguments', () => {
    const { asFragment } = render(
      <Provider store={defaultStore}>
        <I18n
          attrs={['alt', 'title', 'hello']}
          args={{
            $guest: 'John Doe',
            $start: { date: startExample, locale: 'fr' },
            $update: { date: updateExample, locale: 'fr' },
          }}
        >
          <img
            src="picture"
            alt="Hello World"
            title="Update of $update, created at $start by $guest"
          />
        </I18n>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should format a date with an input tag', () => {
    const { asFragment } = render(
      <Provider store={defaultStore}>
        <I18n
          attrs={['value']}
          args={{ $dateToUpdate: { date: startExample, locale: 'fr' } }}
        >
          <input
            disabled
            type="text"
            value="$dateToUpdate"
            className="form-control form-control-sm"
          />
        </I18n>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
