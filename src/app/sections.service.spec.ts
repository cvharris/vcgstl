import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SectionsService } from './sections.service';

describe('Sections Service', () => {
  beforeEachProviders(() => [SectionsService]);

  it('should ...',
      inject([SectionsService], (service: SectionsService) => {
    expect(service).toBeTruthy();
  }));
});
