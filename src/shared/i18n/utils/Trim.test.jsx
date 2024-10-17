import en from '../dictionaries/en';
import fr from '../dictionaries/fr';
import { trim } from '.';

describe('trim', () => {
  it('should trim local dictionary. undefined', () => {
    expect(trim(undefined)).toEqual([]);
  });

  it('should trim local dictionary. fail', () => {
    expect(
      trim({
        Yes: 'Oui',
        Paging: 'Pagination',
        'Hello World': 'Bonjour le monde',
        Internationalization: 'Internationalisation',
      })
    ).toEqual(['Yes', 'Hello World']);
  });

  it('should trim local dictionary. success', () => {
    expect(
      trim({
        Paging: 'Pagination',
        Internationalization: 'Internationalisation',
      })
    ).toEqual([]);
  });
});
