import initialState from './initialState';

describe('I18n initialState', () => {
  it('should handle tsl', () => {
    expect(initialState.tsl('Yes')).toEqual('Oui');
  });

  it('should handle initial state', () => {
    expect(initialState).toEqual({
      dictionaries: expect.any(Array),
      tsl: expect.any(Function),
      lang: 'fr',
    });
  });
});
