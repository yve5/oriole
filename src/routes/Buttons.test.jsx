import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';

import Buttons from './Buttons';

describe('Buttons', () => {
  it('should match expected snapshot', async () => {
    const { asFragment, getAllByText, rerender } = render(<Buttons />);

    rerender(<Buttons />);

    await act(async () => {
      fireEvent.click(getAllByText('Primary')[0]);
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
