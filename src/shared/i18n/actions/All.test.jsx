import { changeLang, initLang, switchLang } from './All';

describe('I18n Actions', () => {
  it('should handle I18N_INIT_LANG. undefined', () => {
    expect(initLang(undefined)).toEqual({
      type: 'I18N_INIT_LANG',
      lang: 'fr',
    });
  });

  it('should handle I18N_INIT_LANG. default', () => {
    expect(initLang('en')).toEqual({
      type: 'I18N_INIT_LANG',
      lang: 'en',
    });
  });

  it('should handle I18N_CHANGE_LANG', () => {
    expect(changeLang('fr')).toEqual({
      type: 'I18N_CHANGE_LANG',
      lang: 'fr',
    });
  });

  it('should handle I18N_SWITCH_LANG', () => {
    expect(switchLang()).toEqual({
      type: 'I18N_SWITCH_LANG',
    });
  });
});
