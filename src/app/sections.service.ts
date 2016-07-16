import { Injectable } from '@angular/core';

import { Section } from './sections/section';
import { SECTIONS } from './sections/sections-list';

@Injectable()
export class SectionsService {
  getSections(query) {
    if (query) {
      return SECTIONS.filter( section => {
        for (var key in query) {
          if (section[key] === query[key]) {
            return true;
          }
        }
        return false;
      });
    } else {
      return SECTIONS;
    }
  }
}
