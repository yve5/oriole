import React from 'react';
import configureMockStore from 'redux-mock-store';

import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import { act, render } from '@testing-library/react';

import reducer from '../../i18n/reducer';
import SvgContainer from './SvgContainer';
import en from '../../i18n/dictionaries/en';
import fr from '../../i18n/dictionaries/fr';

import * as AllIcons from '../../../features/icons';

const mockStore = configureMockStore([thunk]);

const defaultStore = mockStore({ i18n: reducer([fr, en])() });

const DefaultIcon = AllIcons.QuestionMark;

describe('SvgContainer', () => {
  it('should match expected snapshot. default', () => {
    const { asFragment } = render(
      <Provider store={mockStore(defaultStore)}>
        <SvgContainer>
          <path d="M200-440v-80h560v80H200Z" />
        </SvgContainer>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match expected snapshot. className', () => {
    const { asFragment } = render(
      <Provider store={mockStore(defaultStore)}>
        <SvgContainer className="me-5">
          <path d="M200-440v-80h560v80H200Z" />
        </SvgContainer>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match expected snapshot. size', () => {
    const { asFragment } = render(
      <Provider store={mockStore(defaultStore)}>
        <div>
          <DefaultIcon medium />
          <DefaultIcon large />
        </div>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match expected snapshot. color', () => {
    const { asFragment } = render(
      <Provider store={mockStore(defaultStore)}>
        <DefaultIcon danger />
        <DefaultIcon disabled />
        <DefaultIcon info />
        <DefaultIcon success />
        <DefaultIcon warning />
        <DefaultIcon primary />
        <DefaultIcon ghost />
        <DefaultIcon help />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match expected snapshot. title', () => {
    const { asFragment } = render(
      <Provider store={mockStore(defaultStore)}>
        <DefaultIcon title="Hello World" />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match expected snapshot. data-testid', () => {
    const { asFragment } = render(
      <Provider store={mockStore(defaultStore)}>
        <DefaultIcon data-testid="remove-icon" />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
