import React from 'react';
import configureMockStore from 'redux-mock-store';

import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import Paging from './Paging';
import i18n from '../../../i18n';

const mockStore = configureMockStore([thunk]);

describe('Paging', () => {
  it('should match expected snapshot', async () => {
    const instance = (
      <Provider store={mockStore({ i18n })}>
        <Paging />
      </Provider>
    );

    const { asFragment, rerender } = render(instance);

    rerender(instance);

    expect(asFragment()).toMatchSnapshot();
  });
});
