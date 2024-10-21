import en from '../dictionaries/en';
import fr from '../dictionaries/fr';
import {
  checkTermOrder,
  convertCollection,
  checkLocalTermOrder,
  convertLocalCollection,
} from '.';

const smallDico = {
  LANG: 'en',
  LANGUAGE: 'English',
  DATE_FORMAT: 'MM/dd/yyyy',
  LOCALE: 'enUS',
  '$total records': '$total records',
  Add: 'Add',
  'Ascending order': 'Ascending order',
};

describe('checkTermOrder', () => {
  const firstTerms = ['LANG', 'LANGUAGE', 'DATE_FORMAT', 'LOCALE'];

  it('should check term order. english', () => {
    expect(checkTermOrder(en)).toEqual(convertCollection(en));
  });

  it('should check term order. french', () => {
    expect(checkTermOrder(fr)).toEqual(convertCollection(fr));
  });

  it('should check term order. english disorder', () => {
    const enDisorder = convertCollection(en);
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

  it('should check term order. french disorder', () => {
    const frDisorder = convertCollection(fr);
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

  it('should check term order. LANG is missing', () => {
    expect(() =>
      checkTermOrder({ LANGUAGE: 'English', Hello: 'World' })
    ).toThrow('LANG must be defined in dictionary');
  });

  it('should check term order. LANGUAGE is missing', () => {
    expect(() => checkTermOrder({ LANG: 'en', Hello: 'World' })).toThrow(
      'LANGUAGE must be defined in dictionary'
    );
  });
});

describe('checkTermOrder', () => {
  it("should check the local collection's term order", () => {
    expect(checkLocalTermOrder(smallDico)).toEqual([
      'LANG',
      '$total records',
      'Add',
      'Ascending order',
      'DATE_FORMAT',
      'LANGUAGE',
      'LOCALE',
    ]);
  });
});

describe('convertCollection', () => {
  it('should convert a collection to an array', () => {
    expect(convertCollection(smallDico)).toEqual([
      'LANG',
      'LANGUAGE',
      'DATE_FORMAT',
      'LOCALE',
      '$total records',
      'Add',
      'Ascending order',
    ]);
  });
});

describe('convertLocalCollection', () => {
  it('should convert a local collection to an array', () => {
    expect(convertLocalCollection(smallDico)).toEqual([
      'LANG',
      '$total records',
      'Add',
      'Ascending order',
    ]);
  });
});
