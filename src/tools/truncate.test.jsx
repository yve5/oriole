import { truncate } from './truncate';

describe('truncate', () => {
  it('should truncate text', () => {
    const shortText = 'Hello World';
    const longText =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

    expect(truncate(shortText)).toEqual(shortText);
    expect(truncate(longText)).toEqual(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo...'
    );
    expect(truncate(shortText, 42)).toEqual(shortText);
    expect(truncate(longText, 42)).toEqual(
      'Lorem ipsum dolor sit amet, consectetur...'
    );
  });

  it('should handle truncate uncorrect text', () => {
    expect(truncate(undefined)).toEqual(undefined);
    expect(truncate(null)).toEqual(null);
  });
});
