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
    expect(getIconComponent('light_mode', AllIcons, true)).toEqual(
      AllIcons.QuestionMark
    );
  });

  it('should match expected snapshot. error', () => {
    const error = () => getIconComponent('light_mode', AllIcons);
    expect(error).toThrow('Not founded icon: light_mode');
  });

  it('should return icon component. success', () => {
    expect(getIconComponent('LightMode', AllIcons)).toEqual(AllIcons.LightMode);
  });
});
