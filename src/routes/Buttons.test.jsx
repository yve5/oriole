import React from 'react';
import { expect, test, vi } from 'vitest';
import { act, create } from 'react-test-renderer';

import Buttons from './Buttons';

test('should match expected snapshot', () => {
  HTMLCanvasElement.prototype.getContext = vi.fn(() => ({
    arc: vi.fn(),
    beginPath: vi.fn(),
    clearRect: vi.fn(),
    closePath: vi.fn(),
    fill: vi.fn(),
    lineTo: vi.fn(),
    moveTo: vi.fn(),
    rotate: vi.fn(),
    restore: vi.fn(),
    save: vi.fn(),
    scale: vi.fn(),
    translate: vi.fn(),
  }));

  const component = create(<Buttons />);

  act(() => {
    component.update(<Buttons />);
  });

  act(() => {
    component.root
      .findAllByProps({ 'data-testid': 'button-demo' })[0]
      .props.onClick();
  });

  expect(component.toJSON()).toMatchSnapshot();
});
