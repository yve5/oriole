import en from '../dictionaries/en';
import fr from '../dictionaries/fr';
import { checkTermOrder, convertCollectionToArray } from '.';

describe('checkTermOrder', () => {
  const firstTerms = ['LANG', 'LANGUAGE', 'DATE_FORMAT', 'LOCALE'];

  it('should check fake term order. english', () => {
    expect(checkTermOrder(en)).toEqual(convertCollectionToArray(en));
  });

  it('should check fake term order. french', () => {
    expect(checkTermOrder(fr)).toEqual(convertCollectionToArray(fr));
  });

  it('should check fake term order. english disorder', () => {
    const enDisorder = convertCollectionToArray(en);
    enDisorder.splice(0, 1);
    enDisorder.splice(0, 1);
    enDisorder.splice(0, 1);
    enDisorder.splice(0, 1);

    expect(
      checkTermOrder({
        '#hello3': 'lorem ipsum...',
        '#Hello1': 'lorem ipsum...',
        '#hello1': 'lorem ipsum...',
        ...en,
        '#hello2': 'lorem ipsum...',
      })
    ).toEqual([
      ...firstTerms,
      '#Hello1',
      '#hello1',
      '#hello2',
      '#hello3',
      ...enDisorder,
    ]);
  });

  it('should check fake term order. french disorder', () => {
    const frDisorder = convertCollectionToArray(fr);
    frDisorder.splice(0, 1);
    frDisorder.splice(0, 1);
    frDisorder.splice(0, 1);
    frDisorder.splice(0, 1);

    expect(
      checkTermOrder({
        '#hello3': 'lorem ipsum...',
        '#Hello3': 'lorem ipsum...',
        '#hello1': 'lorem ipsum...',
        ...fr,
        Zzzzzzzzip: 'lorem ipsum...',
      })
    ).toEqual([
      ...firstTerms,
      '#hello1',
      '#Hello3',
      '#hello3',
      ...frDisorder,
      'Zzzzzzzzip',
    ]);
  });

  it('should check fake term order. LANG is missing', () => {
    expect(() =>
      checkTermOrder({ LANGUAGE: 'English', Hello: 'World' })
    ).toThrow('LANG must be defined in dictionary');
  });

  it('should check fake term order. LANGUAGE is missing', () => {
    expect(() => checkTermOrder({ LANG: 'en', Hello: 'World' })).toThrow(
      'LANGUAGE must be defined in dictionary'
    );
  });
});
