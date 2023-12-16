import React from 'react';
import { expect, test, vi } from 'vitest';

import { render, screen } from '@testing-library/react';
import { act, create } from 'react-test-renderer';

import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).not.toBeNull();
});

test('should match expected snapshot', () => {
  HTMLCanvasElement.prototype.getContext = vi.fn();
  const component = create(<App />);

  act(() => {
    component.update(<App />);
  });

  // act(() => {
  //   component.root
  //     .findAllByProps({ 'data-testid': 'button-demo' })[0]
  //     .props.onClick();
  // });

  expect(component.toJSON()).toMatchSnapshot();
});
