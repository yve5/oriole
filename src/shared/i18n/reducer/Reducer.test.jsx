import { vi } from 'vitest';

import reducer, { initialState } from './Reducer';
import { initLang, switchLang } from '../actions/All';

import en from '../dictionaries/en';
import fr from '../dictionaries/fr';

describe('I18n reducer', () => {
  const localState = {
    dictionaries: expect.any(Array),
    tsl: expect.any(Function),
    lang: 'en',
  };

  it('should handle tsl', () => {
    expect(initialState.tsl('Yes')).toEqual('Oui');
  });

  it('should handle initial state. undefined', () => {
    const innerState = reducer(undefined)();
    expect(innerState).toEqual(localState);
  });

  it('should handle initial state. initialized', () => {
    const innerState = reducer(fr, en)();

    expect(innerState).toEqual({
      ...localState,
      lang: 'fr',
    });

    expect(innerState.tsl('Yes')).toEqual('Oui');
  });

  it('should handle I18N_INIT_LANG', () => {
    const innerState = reducer()(
      { dictionaries: [en, fr], lang: 'en', tsl: expect.any(Function) },
      initLang('fr')
    );

    expect(innerState).toEqual({
      ...localState,
      type: 'I18N_INIT_LANG',
      lang: 'fr',
    });

    expect(innerState.tsl('Yes')).toEqual('Oui');
  });

  it('should handle I18N_SWITCH_LANG. default', () => {
    const innerState = reducer()(
      { dictionaries: [en, fr], lang: 'fr', tsl: vi.fn() },
      switchLang()
    );

    expect(innerState).toEqual({
      ...localState,
      type: 'I18N_SWITCH_LANG',
    });

    expect(innerState.tsl('Yes')).toEqual('Oui');
  });

  it('should handle I18N_SWITCH_LANG. french', () => {
    const innerState = reducer()(
      { dictionaries: [en, fr], lang: 'en', tsl: expect.any(Function) },
      switchLang()
    );

    expect(innerState).toEqual({
      ...localState,
      type: 'I18N_SWITCH_LANG',
      lang: 'fr',
    });

    expect(innerState.tsl('Yes')).toEqual('Oui');
  });
});
