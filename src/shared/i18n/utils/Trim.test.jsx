import { trimTerms } from '.';

describe('trim', () => {
  it('should trim local dictionary. undefined', () => {
    expect(trimTerms(undefined)).toEqual([]);
  });

  it('should trim local dictionary. fail', () => {
    expect(
      trimTerms({
        Yes: 'Oui',
        Paging: 'Pagination',
        'Hello World': 'Bonjour le monde',
        Internationalization: 'Internationalisation',
      })
    ).toEqual(['Yes', 'Hello World']);
  });

  it('should trim local dictionary. success', () => {
    expect(
      trimTerms({
        Paging: 'Pagination',
        Internationalization: 'Internationalisation',
      })
    ).toEqual([]);
  });

  it('should trim local dictionary. alternative translation', () => {
    expect(
      trimTerms({
        Yes: 'Oui alternatif',
        Paging: 'Pagination',
        Internationalization: 'Internationalisation',
      })
    ).toEqual(['Yes']);
  });
});
