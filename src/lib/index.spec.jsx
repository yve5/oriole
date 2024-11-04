import React from 'react';
import { render } from '@testing-library/react';

import { Theme } from './index';

describe('Library', () => {
  it('renders Theme', () => {
    const { asFragment, rerender } = render(<Theme />);
    rerender(<Theme />);
    expect(asFragment()).toMatchSnapshot();
  });
});
