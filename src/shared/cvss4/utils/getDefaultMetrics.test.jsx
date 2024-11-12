import { getDefaultMetrics } from '../../../lib/cvss4';
import { defaultMetrics } from '../resources/fakeData';

describe('getDefaultMetrics', () => {
  it('should initialize metrics', () => {
    expect(getDefaultMetrics()).toEqual(defaultMetrics);
  });
});
