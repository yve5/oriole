import React from 'react';
import configureMockStore from 'redux-mock-store';

import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Footer from './Footer';
import i18n from '../../../i18n';

const mockStore = configureMockStore([thunk]);

describe('Footer', () => {
  it('renders the component', () => {
    const { getByText } = render(
      <Provider store={mockStore({ i18n })}>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </Provider>
    );
    expect(getByText('À propos de nous')).toBeDefined();
    expect(getByText('Journal des modifications')).toBeDefined();
  });
});
