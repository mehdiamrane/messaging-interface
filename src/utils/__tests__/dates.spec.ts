import { timestampToDate, formatDate } from '../dates';

describe('timestampToDate', () => {
  it('should return a date', () => {
    const timestamp = 1625648667;
    const expected: Date = new Date('07/07/2021 11:04:27');

    expect(timestampToDate(timestamp)).toEqual(expected);
  });
});

describe('formatDate', () => {
  it('should format date in french locale', () => {
    const date = new Date('07/07/2021 11:04:27');
    const locale = 'fr';
    const expected = 'mercredi 7 juillet 2021, 11:04';

    expect(formatDate(date, locale)).toEqual(expected);
  });

  it('should format date in en-US locale', () => {
    const date = new Date('07/07/2021 11:04:27');
    const locale = 'en-US';
    const expected = 'Wednesday, July 7, 2021, 11:04 AM';

    expect(formatDate(date, locale)).toEqual(expected);
  });
});
