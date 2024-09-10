import React from 'react';
import { act, render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<App />);
    expect(getByText('Paging')).not.toBeNull();
  });

  it('should match expected snapshot', () => {
    const { asFragment, rerender } = render(<App />);
    rerender(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
