import React from 'react';
import { vi } from 'vitest';
import { act, fireEvent, render } from '@testing-library/react';

import Theme from './Theme';

const mockMatchMedia = (matches) => ({
  removeEventListener: vi.fn(),
  addEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
  matches,
});

describe('Theme', () => {
  it('renders the component. default', async () => {
    window.matchMedia = vi.fn().mockImplementation(() => mockMatchMedia(false));

    const { asFragment, getByTestId, rerender } = render(<Theme />);

    rerender(<Theme />);

    await act(async () => {
      fireEvent.click(getByTestId('theme-button'));
    });

    rerender(<Theme />);

    await act(async () => {
      fireEvent.click(getByTestId('theme-button'));
    });

    rerender(<Theme />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the component. dark', async () => {
    window.matchMedia.mockImplementation(() => mockMatchMedia(true));

    const { asFragment, getByTestId, rerender } = render(<Theme />);

    rerender(<Theme />);

    await act(async () => {
      fireEvent.click(getByTestId('theme-button'));
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
