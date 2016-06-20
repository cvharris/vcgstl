import { Pipe, PipeTransform } from '@angular/core';
import { Section } from '../sections/section';

@Pipe({
  name: 'activeSection',
  pure: false
})
export class ActiveSectionPipe implements PipeTransform {

  transform(sections:any[]) {
    if (!sections) {
      return [];
    }
    return sections.filter(section => section.active);
  }

}
