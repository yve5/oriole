import { vi } from 'vitest';

import * as AllIcons from '../components';
import { getIconComponent } from './Component';

describe('getIconComponent', () => {
  beforeEach(() => {
    console.warn = vi.fn();
  });

  it('should return icon component. undefined', () => {
    expect(getIconComponent(undefined, AllIcons, true)).toEqual(
      AllIcons.QuestionMark
    );
  });

  it('should return icon component. not string', () => {
    expect(getIconComponent(42, AllIcons, true)).toEqual(AllIcons.QuestionMark);
  });

  it('should return icon component. not found', () => {
    expect(getIconComponent('power_settings_new', AllIcons, true)).toEqual(
      AllIcons.QuestionMark
    );
  });

  it('should match expected snapshot. error', () => {
    const error = () => getIconComponent('power_settings_new', AllIcons);
    expect(error).toThrow('Not founded icon: power_settings_new');
  });

  it('should return icon component. success', () => {
    expect(getIconComponent('PowerSettingsNew', AllIcons)).toEqual(
      AllIcons.PowerSettingsNew
    );
  });
});
