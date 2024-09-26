import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

test.skip('renders the app', () => {
  const { getByText, rerender } = render(<App />);
  rerender(<App />);
  expect(getByText('Paging')).not.toBeNull();
});
