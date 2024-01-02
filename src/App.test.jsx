import React from 'react';
import { render, screen } from '@testing-library/react';
import { act, create } from 'react-test-renderer';

import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Paging/i);
  expect(linkElement).not.toBeNull();
});

test('should match expected snapshot', () => {
  const component = create(<App />);

  act(() => {
    component.update(<App />);
  });

  expect(component.toJSON()).toMatchSnapshot();
});
