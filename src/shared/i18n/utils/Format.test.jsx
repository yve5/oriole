import { formatDate } from '.';

describe('formatDate', () => {
  it('should handle a wrong date', () => {
    expect(formatDate('')).toEqual('-');
    expect(formatDate(null)).toEqual('-');
    expect(formatDate(undefined)).toEqual('-');
  });

  const example = new Date(2020, 2, 14, 13, 37, 14);
  const locale = 'fr';

  it('should handle a plain date', () => {
    expect(formatDate(example)).toEqual('03/14/2020');
    expect(formatDate(example, 'PP')).toEqual('Mar 14, 2020');
    expect(formatDate(example, 'PPp')).toEqual('Mar 14, 2020, 1:37 PM');
    expect(formatDate(example, 'Pp')).toEqual('03/14/2020, 1:37 PM');
    expect(formatDate(example, 'y')).toEqual('2020');
    expect(formatDate(example, 'fromNow')).toMatch(/(ago)/i);
  });

  it('should handle a plain date in french', () => {
    expect(formatDate(example, 'P', locale)).toEqual('14/03/2020');
    expect(formatDate(example, 'PP', locale)).toEqual('14 mars 2020');
    expect(formatDate(example, 'PPp', locale)).toEqual('14 mars 2020, 13:37');
    expect(formatDate(example, 'Pp', locale)).toEqual('14/03/2020, 13:37');
    expect(formatDate(example, 'y', locale)).toEqual('2020');
    expect(formatDate(example, 'fromNow', locale)).toMatch(/(il y a)/i);
  });

  const stringDate = '2019-09-10';

  it('should handle a string date', () => {
    expect(formatDate(stringDate)).toEqual('09/10/2019');
    expect(formatDate(stringDate, 'PP')).toEqual('Sep 10, 2019');
    expect(formatDate(stringDate, 'PPp')).toEqual('Sep 10, 2019, 12:00 AM');
    expect(formatDate(stringDate, 'Pp')).toEqual('09/10/2019, 12:00 AM');
    expect(formatDate(stringDate, 'y')).toEqual('2019');
    expect(formatDate(stringDate, 'fromNow')).toMatch(/(ago)/i);
  });

  it('should handle a string date in french', () => {
    expect(formatDate(stringDate, 'P', locale)).toEqual('10/09/2019');
    expect(formatDate(stringDate, 'PP', locale)).toEqual('10 sept. 2019');
    expect(formatDate(stringDate, 'PPp', locale)).toEqual(
      '10 sept. 2019, 00:00'
    );
    expect(formatDate(stringDate, 'Pp', locale)).toEqual('10/09/2019, 00:00');
    expect(formatDate(stringDate, 'y', locale)).toEqual('2019');
    expect(formatDate(stringDate, 'fromNow', locale)).toMatch(/(il y a)/i);
  });

  const stringDatetime = '2020-01-13 12:44:32';

  it('should handle a string datetime', () => {
    expect(formatDate(stringDatetime)).toEqual('01/13/2020');
    expect(formatDate(stringDatetime, 'PP')).toEqual('Jan 13, 2020');
    expect(formatDate(stringDatetime, 'PPp')).toEqual('Jan 13, 2020, 12:44 PM');
    expect(formatDate(stringDatetime, 'Pp')).toEqual('01/13/2020, 12:44 PM');
    expect(formatDate(stringDatetime, 'y')).toEqual('2020');
    expect(formatDate(stringDatetime, 'fromNow')).toMatch(/(ago)/i);
  });

  it('should handle a string datetime in french', () => {
    expect(formatDate(stringDatetime, 'P', locale)).toEqual('13/01/2020');
    expect(formatDate(stringDatetime, 'PP', locale)).toEqual('13 janv. 2020');
    expect(formatDate(stringDatetime, 'PPp', locale)).toEqual(
      '13 janv. 2020, 12:44'
    );
    expect(formatDate(stringDatetime, 'Pp', locale)).toEqual(
      '13/01/2020, 12:44'
    );
    expect(formatDate(stringDatetime, 'y', locale)).toEqual('2020');
    expect(formatDate(stringDatetime, 'fromNow', locale)).toMatch(/(il y a)/i);
  });
});
