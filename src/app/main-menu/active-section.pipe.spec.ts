import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { ActiveSectionPipe } from './active-section.pipe';

describe('ActiveSectionPipe', () => {
  beforeEachProviders(() => [ActiveSectionPipe]);

  it('should transform the input', inject([ActiveSectionPipe], (pipe: ActiveSectionPipe) => {
      // expect(pipe.transform(true)).toBe(null);
  }));
});
