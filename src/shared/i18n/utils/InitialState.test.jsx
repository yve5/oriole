import en from '../dictionaries/en';
import fr from '../dictionaries/fr';
import { getInitialState } from './InitialState';

describe('getInitialState', () => {
  const i18n = getInitialState();
  const i18nAlt = getInitialState([fr, en]);

  it('should handle tsl', () => {
    expect(i18n.tsl('Yes')).toBe('Yes');
    expect(i18nAlt.tsl('Yes')).toBe('Oui');
  });

  it('should handle initial state', () => {
    expect(i18n).toEqual({
      dictionaries: expect.any(Array),
      tsl: expect.any(Function),
      lang: 'en',
    });

    expect(i18nAlt).toEqual({
      dictionaries: expect.any(Array),
      tsl: expect.any(Function),
      lang: 'fr',
    });
  });
});
