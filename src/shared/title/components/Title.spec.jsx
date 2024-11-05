import React from 'react';
import configureMockStore from 'redux-mock-store';

import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { act, fireEvent, render } from '@testing-library/react';

import Title from './Title';
import i18n from '../../../i18n';

const mockStore = configureMockStore([thunk]);

const fakeUrl = '/url/example';
const fakeTitle =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis suscipit ad modi exercitationem laudantium iure, perspiciatis a quam aliquam assumenda pariatur ratione laborum repellat sapiente rem voluptates quidem eligendi minus?';

const defaultStore = { i18n };

describe('Title', () => {
  it('should match expected snapshot. default', () => {
    const { asFragment } = render(
      <Provider store={mockStore(defaultStore)}>
        <MemoryRouter>
          <Title />
        </MemoryRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match expected snapshot. backTo url', () => {
    const { asFragment } = render(
      <Provider store={mockStore(defaultStore)}>
        <MemoryRouter>
          <Title backTo={fakeUrl} />
        </MemoryRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  const theButton = (
    <button className="btn btn-link btn-sm" type="button">
      Export
    </button>
  );

  it('should match expected snapshot. optional', () => {
    const { asFragment } = render(
      <Provider store={mockStore(defaultStore)}>
        <MemoryRouter>
          <Title optional={theButton} />
        </MemoryRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match expected snapshot. undefined title', () => {
    const { asFragment } = render(
      <Provider store={mockStore(defaultStore)}>
        <MemoryRouter>
          <Title title={undefined} />
        </MemoryRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match expected snapshot. null title', () => {
    const { asFragment } = render(
      <Provider store={mockStore(defaultStore)}>
        <MemoryRouter>
          <Title title={null} />
        </MemoryRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match expected snapshot. empty title', () => {
    const { asFragment } = render(
      <Provider store={mockStore(defaultStore)}>
        <MemoryRouter>
          <Title title="" />
        </MemoryRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match expected snapshot. plain title', () => {
    const { asFragment } = render(
      <Provider store={mockStore(defaultStore)}>
        <MemoryRouter>
          <Title title="Hello World" />
        </MemoryRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match expected snapshot. long title', async () => {
    const { asFragment, getByText } = render(
      <Provider store={mockStore(defaultStore)}>
        <MemoryRouter>
          <Title title={fakeTitle} />
        </MemoryRouter>
      </Provider>
    );

    await act(async () => {
      fireEvent.click(
        getByText(
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis suscipit ad modi exercitationem laudantium iure, perspiciatis a quam aliquam assumenda pariatur ratione laborum repellat sapiente rem voluptates quidem ...'
        )
      );
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it('should match expected snapshot. i18n term', () => {
    const { asFragment } = render(
      <Provider store={mockStore(defaultStore)}>
        <MemoryRouter>
          <Title i18n="Hello World" />
        </MemoryRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match expected snapshot. i18n term and title', () => {
    const { asFragment } = render(
      <Provider store={mockStore(defaultStore)}>
        <MemoryRouter>
          <Title i18n="Hello World" title="New account" />
        </MemoryRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match expected snapshot. skeleton', () => {
    const { asFragment } = render(
      <Provider store={mockStore(defaultStore)}>
        <MemoryRouter>
          <Title
            title={
              <span className="Skeleton Skeleton--title" title="Loading..." />
            }
          />
        </MemoryRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match expected snapshot. no print', () => {
    const { asFragment } = render(
      <Provider store={mockStore(defaultStore)}>
        <MemoryRouter>
          <Title backTo={fakeUrl} title="Hello World" hideInPrint />
        </MemoryRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
