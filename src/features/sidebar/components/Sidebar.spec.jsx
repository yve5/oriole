import React from 'react';
import configureMockStore from 'redux-mock-store';

import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { act, fireEvent, render } from '@testing-library/react';

import Sidebar from './Sidebar';
import i18n from '../../../i18n';

const mockStore = configureMockStore([thunk]);

describe('Sidebar', () => {
  it('renders the component', async () => {
    const { asFragment, getByText, rerender } = render(
      <Provider store={mockStore({ i18n })}>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();

    await act(async () => {
      fireEvent.click(getByText('Développer'));
    });

    rerender(
      <Provider store={mockStore({ i18n })}>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
