import React from 'react';
import configureMockStore from 'redux-mock-store';

import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { act, fireEvent, render } from '@testing-library/react';

import Buttons from './Buttons';
import i18n from '../../../i18n';

const mockStore = configureMockStore([thunk]);

describe('Buttons', () => {
  it('render the component', async () => {
    const { asFragment, getAllByText } = render(
      <Provider store={mockStore({ i18n })}>
        <MemoryRouter>
          <Buttons />
        </MemoryRouter>
      </Provider>
    );

    await act(async () => {
      fireEvent.click(getAllByText('Primary')[0]);
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
