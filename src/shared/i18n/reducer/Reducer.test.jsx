import { vi } from 'vitest';

import reducer from './Reducer';
import en from '../dictionaries/en';
import fr from '../dictionaries/fr';
import { changeLang, switchLang } from '../actions/All';

describe('I18n reducer', () => {
  const localState = {
    dictionaries: expect.any(Array),
    tsl: expect.any(Function),
    lang: 'en',
  };

  it('should handle initial state. undefined', () => {
    const innerState = reducer(undefined)();

    expect(innerState).toEqual(localState);
    expect(innerState.tsl('Yes')).toBe('Yes');
  });

  it('should handle initial state. initialized', () => {
    const innerState = reducer([fr, en])();

    expect(innerState).toEqual({
      ...localState,
      lang: 'en',
    });

    expect(innerState.tsl('Yes')).toEqual('Oui');
  });

  it('should handle I18N_CHANGE_LANG', () => {
    const innerState = reducer()(
      {
        lang: 'en',
        dictionaries: [en, fr],
        tsl: expect.any(Function),
      },
      changeLang('fr')
    );

    expect(innerState).toEqual({
      ...localState,
      type: 'I18N_CHANGE_LANG',
      lang: 'fr',
    });

    expect(innerState.tsl('Yes')).toEqual('Oui');
  });

  it('should handle I18N_SWITCH_LANG. default', () => {
    const innerState = reducer()(
      {
        lang: 'fr',
        tsl: vi.fn(),
        dictionaries: [en, fr],
      },
      switchLang()
    );

    expect(innerState).toEqual({
      ...localState,
      type: 'I18N_SWITCH_LANG',
    });

    expect(innerState.tsl('Yes')).toBe('Yes');
  });

  it('should handle I18N_SWITCH_LANG. french', () => {
    const innerState = reducer()(
      {
        lang: 'en',
        dictionaries: [en, fr],
        tsl: expect.any(Function),
      },
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
