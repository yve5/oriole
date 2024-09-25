import React from 'react';
import { vi } from 'vitest';
import { render } from '@testing-library/react';

import { ThemeButton } from './index';

describe('Library', () => {
  it('renders ThemeButton', () => {
    const { asFragment, rerender } = render(<ThemeButton />);
    rerender(<ThemeButton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
