import React from 'react';
import { vi } from 'vitest';
import { act, fireEvent, render } from '@testing-library/react';

import ThemeButton from './ThemeButton';

const mockMatchMedia = (matches) => ({
  removeEventListener: vi.fn(),
  addEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
  matches,
});

describe('ThemeButton', () => {
  it('renders the component. default', async () => {
    window.matchMedia = vi.fn().mockImplementation(() => mockMatchMedia(false));

    const { asFragment, getByTestId, rerender } = render(<ThemeButton />);

    rerender(<ThemeButton />);

    await act(async () => {
      fireEvent.click(getByTestId('theme-button'));
    });

    rerender(<ThemeButton />);

    await act(async () => {
      fireEvent.click(getByTestId('theme-button'));
    });

    rerender(<ThemeButton />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the component. dark', async () => {
    window.matchMedia.mockImplementation(() => mockMatchMedia(true));

    const { asFragment, getByTestId, rerender } = render(<ThemeButton />);

    rerender(<ThemeButton />);

    await act(async () => {
      fireEvent.click(getByTestId('theme-button'));
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
