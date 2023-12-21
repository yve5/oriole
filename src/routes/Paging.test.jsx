import React from 'react';
import { act, create } from 'react-test-renderer';
import { vi } from 'vitest';

import Paging from './Paging';

test('should match expected snapshot', () => {
  const component = create(<Paging />);

  act(() => {
    component.update(<Paging />);
  });

  expect(component.toJSON()).toMatchSnapshot();
});
