import React from 'react';
import configureMockStore from 'redux-mock-store';

import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';
import i18n from '../../../i18n';

const mockStore = configureMockStore([thunk]);

describe('Header', () => {
  it('renders the component. default', () => {
    const instance = (
      <Provider store={mockStore({ i18n })}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );

    const { asFragment, rerender } = render(instance);

    rerender(instance);

    expect(asFragment()).toMatchSnapshot();
  });
});
