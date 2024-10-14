import React from 'react';
import * as AllIcons from '.';

describe('SvgContainer', () => {
  it('should handle icons total', () => {
    expect(Object.values(AllIcons).length).toEqual(6);
  });
});
