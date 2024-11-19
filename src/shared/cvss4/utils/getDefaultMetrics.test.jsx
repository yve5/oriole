import { defaultMetrics } from '../resources/fakeData';
import { getDefaultMetrics } from '../../../lib';

describe('getDefaultMetrics', () => {
  it('should initialize metrics', () => {
    expect(getDefaultMetrics()).toEqual(defaultMetrics);
  });
});
