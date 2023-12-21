import React from 'react';
import { act, create } from 'react-test-renderer';
import { vi } from 'vitest';

import Buttons from './Buttons';

test('should match expected snapshot', () => {
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
