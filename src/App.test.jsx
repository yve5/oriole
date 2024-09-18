import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it.skip('renders learn react link', () => {
    const { getByText } = render(<App />);
    expect(getByText('Paging')).not.toBeNull();
  });

  it.skip('should match expected snapshot', () => {
    const { asFragment, rerender } = render(<App />);
    rerender(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
