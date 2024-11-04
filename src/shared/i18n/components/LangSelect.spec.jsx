import React from 'react';
import configureMockStore from 'redux-mock-store';

import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';

import reducer from '../reducer';
import { LangSelect } from '../../../lib';

const mockStore = configureMockStore([thunk]);
const defaultStore = { i18n: reducer()() };

describe('LangSelect', () => {
  it('should match expected snapshot. default', async () => {
    const { asFragment, getByTestId } = render(
      <Provider store={mockStore(defaultStore)}>
        <LangSelect />
      </Provider>
    );

    const selectElement = getByTestId('i18n-lang-select');
    fireEvent.change(selectElement, { target: { value: 'fr' } });

    expect(selectElement.value).toBe('fr');
    expect(asFragment()).toMatchSnapshot();
  });
});
