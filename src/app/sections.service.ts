import { Injectable } from '@angular/core';

import { Section } from './section/section';
import { SECTIONS } from './section/sections-list';

@Injectable()
export class SectionsService {
  getSections() {
    return Promise.resolve(SECTIONS);
  }
}
