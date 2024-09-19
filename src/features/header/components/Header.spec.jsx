import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

describe('Header', () => {
  it('renders the component. default', () => {
    const instance = (
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const { asFragment, rerender } = render(instance);

    rerender(instance);

    expect(asFragment()).toMatchSnapshot();
  });
});
