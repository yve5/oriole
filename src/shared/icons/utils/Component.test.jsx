import { vi } from 'vitest';

import { getIconComponent } from '.';
import * as AllIcons from '../../../features/icons';

describe('getIconComponent', () => {
  beforeEach(() => {
    console.warn = vi.fn();
  });

  it('should return icon component. undefined', () => {
    expect(getIconComponent(undefined, true)).toEqual(AllIcons.QuestionMark);
  });

  it('should return icon component. not string', () => {
    expect(getIconComponent(42, true)).toEqual(AllIcons.QuestionMark);
  });

  it('should return icon component. not found', () => {
    expect(getIconComponent('power_settings_new', true)).toEqual(
      AllIcons.QuestionMark
    );
  });

  it('should match expected snapshot. error', () => {
    const error = () => getIconComponent('power_settings_new');
    expect(error).toThrow('Not founded icon: power_settings_new');
  });

  it('should return icon component. success', () => {
    expect(getIconComponent('PowerSettingsNew')).toEqual(
      AllIcons.PowerSettingsNew
    );
  });
});
