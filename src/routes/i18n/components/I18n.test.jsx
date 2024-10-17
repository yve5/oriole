import React from 'react';
import configureMockStore from 'redux-mock-store';

import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import I18nPage from './I18n';
import i18n from '../../../i18n';

const mockStore = configureMockStore([thunk]);

describe('I18n', () => {
  it('should match expected snapshot', async () => {
    const instance = (
      <Provider store={mockStore({ i18n })}>
        <I18nPage />
      </Provider>
    );

    const { asFragment, rerender } = render(instance);

    rerender(instance);

    expect(asFragment()).toMatchSnapshot();
  });
});
