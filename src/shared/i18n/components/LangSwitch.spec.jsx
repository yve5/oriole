import React from 'react';
import configureMockStore from 'redux-mock-store';

import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import { act, fireEvent, render } from '@testing-library/react';

import reducer from '../reducer';
import LangSwitch from './LangSwitch';

const mockStore = configureMockStore([thunk]);

const defaultStore = { i18n: reducer()() };

describe('LangSwitch', () => {
  it('should match expected snapshot. default', async () => {
    const { getByText, rerender } = render(
      <Provider store={mockStore(defaultStore)}>
        <LangSwitch />
      </Provider>
    );

    const text = getByText('en');

    await act(async () => {
      fireEvent.click(text);
    });

    expect(text).toBeDefined();
  });
});
