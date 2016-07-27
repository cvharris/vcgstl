import { Injectable } from '@angular/core';

import { Section } from './section';
import { SECTIONS } from './sections-list';

@Injectable()
export class SectionsService {
  getSections(query) {
    if (query) {
      return SECTIONS.filter( section => {
        for (let key in query) {
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
