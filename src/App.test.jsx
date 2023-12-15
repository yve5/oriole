import React from 'react';
import { describe, expect, it } from 'vitest';

// import configureMockStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { act, create } from 'react-test-renderer';

import App from './App';
// import store from '../resources/store';

export function sum(a, b) {
  return a + b;
}

describe('skipped suite', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('renders learn react link', () => {
    render(<App />);
    //   const linkElement = screen.getByText(/Oriole/i);
    //   expect(linkElement).toBeInTheDocument();
  });

  // test('renders learn react link', () => {
  //   // <Provider store={store}>
  //   //   </Provider>
  //   render(<App />);
  //   const linkElement = screen.getByText(/Oriole/i);
  //   expect(linkElement).toBeInTheDocument();
  // });
});
