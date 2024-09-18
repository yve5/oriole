import React from 'react';
import { render } from '@testing-library/react';

import Paging from './Paging';

describe('Paging', () => {
  it('should match expected snapshot', async () => {
    const { asFragment, rerender } = render(<Paging />);
    rerender(<Paging />);
    expect(asFragment()).toMatchSnapshot();
  });
});
