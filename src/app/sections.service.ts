import { Injectable } from '@angular/core';

import { Section } from './sections/section';
import { SECTIONS } from './sections/sections-list';

@Injectable()
export class SectionsService {
  getSections() {
    return Promise.resolve(SECTIONS);
  }
}
