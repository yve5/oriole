import { vi } from 'vitest';
import { tsl } from './Translate';
import fr from '../dictionaries/fr';

describe('Translate', () => {
  beforeEach(() => {
    console.warn = vi.fn();
  });

  it('should translate undefined', () => {
    expect(tsl(fr, undefined)).toEqual(undefined);
  });

  it('should translate non-string content', () => {
    expect(tsl(fr, [1, 2, 3])).toEqual(undefined);
  });

  it("should translate ''", () => {
    const error = () => tsl(fr, '');
    expect(error).toThrow('Not translated input: ');
  });

  it("should translate ' '", () => {
    const error = () => tsl(fr, ' ');
    expect(error).toThrow('Not translated input: ');
  });

  it('should translate non-translated text', () => {
    const error = () => tsl(fr, 'Lorem ipsum...');
    expect(error).toThrow('Not translated input: Lorem ipsum...');
  });

  it('should translate non-translated text. skip error', () => {
    expect(tsl(fr, 'Lorem ipsum...', {}, true)).toEqual('Lorem ipsum...');
  });

  it('should translate translated text', () => {
    expect(tsl(fr, 'Hello World')).toEqual('Bonjour le monde');
  });

  it('should handle text with args in text, but not in params', () => {
    expect(tsl(fr, 'Update of $update, created at $start by $guest')).toEqual(
      'Mise à jour le $update, créé le $start par $guest'
    );
  });

  it('should handle text with args in params, but not in text', () => {
    expect(
      tsl(fr, 'Hello World', {
        $guest: 'John',
      })
    ).toEqual('Bonjour le monde');
  });

  it('should handle text with args', () => {
    expect(
      tsl(fr, 'Update of $update, created at $start by $guest', {
        $update: '2021-09-07',
        $start: '2020-06-20',
        $guest: 'John',
      })
    ).toEqual('Mise à jour le 2021-09-07, créé le 2020-06-20 par John');
  });

  it('should handle untranslated text with args', () => {
    const error = () =>
      tsl(fr, 'UPDATE of $update, created at $start by $guest', {
        $update: '2021-09-07',
        $start: '2020-06-20',
        $guest: 'John',
      });

    expect(error).toThrow(
      'Not translated input: UPDATE of $update, created at $start by $guest'
    );
  });

  it('should handle text with non-object args', () => {
    expect(
      tsl(fr, 'Update of $update, created at $start by $guest', 'Hello World')
    ).toEqual('Mise à jour le $update, créé le $start par $guest');
  });

  const startExample = new Date(2017, 4, 14, 17, 51, 31);
  const updateExample = new Date(2020, 2, 14, 13, 37, 14);

  it('should handle untranslated text with date args', () => {
    expect(
      tsl(fr, 'Update of $update, created at $start by $guest', {
        $guest: 'John',
        $update: { date: updateExample },
      })
    ).toEqual('Mise à jour le 14/03/2020, créé le $start par John');
  });

  it('should handle untranslated text with date and format args', () => {
    expect(
      tsl(fr, 'Update of $update, created at $start by $guest', {
        $guest: 'John',
        $update: { date: updateExample, format: 'PP' },
      })
    ).toEqual('Mise à jour le 14 mars 2020, créé le $start par John');
  });

  it('should handle untranslated text with date, format and lang args', () => {
    expect(
      tsl(fr, 'Update of $update, created at $start by $guest', {
        $guest: 'John',
        $update: { date: updateExample, format: 'PP' },
        $start: { date: startExample, format: 'Pp' },
      })
    ).toEqual(
      'Mise à jour le 14 mars 2020, créé le 14/05/2017, 17:51 par John'
    );
  });

  it('should handle untranslated text with date, format and lang args', () => {
    expect(
      tsl(fr, '$dateToUpdate', {
        $guest: 'John',
        $dateToUpdate: { date: updateExample, format: 'Pp' },
        $start: { date: startExample, format: 'Pp' },
      })
    ).toEqual('14/03/2020, 13:37');
  });
});
