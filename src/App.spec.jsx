import React from 'react';
import configureMockStore from 'redux-mock-store';

import { thunk } from 'redux-thunk';
import { createRoot } from 'react-dom/client';
import { act, render } from '@testing-library/react';
import { Provider, ReactReduxContext } from 'react-redux';

import App from './App';
import i18n from './i18n';
import store from './config/store';

const mockStore = configureMockStore([thunk]);

describe('App', () => {
  it('should render without crashing', async () => {
    const root = createRoot(document.createElement('div'));

    await act(async () => {
      root.render(
        <Provider store={store}>
          <App context={ReactReduxContext} />
        </Provider>
      );
    });

    await act(async () => {
      root.unmount();
    });
  });

  it.skip('should render the app', () => {
    const instance = (
      <Provider store={mockStore({ i18n })}>
        <App history={history} />
      </Provider>
    );

    const { getAllByText, rerender } = render(instance);

    rerender(instance);

    expect(getAllByText('Pagination')).toBeDefined();
    expect(getAllByText('Journal des modifications')).toBeDefined();
  });
});
