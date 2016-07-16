import { Component, OnInit } from '@angular/core';
import { SectionsService } from '../sections.service';
import { Section } from './section';

@Component({
  moduleId: module.id,
  selector: 'app-sections',
  templateUrl: 'sections.component.html',
  providers: [SectionsService],
  styleUrls: ['sections.component.css']
})
export class SectionsComponent implements OnInit {
  sections: Section[];

  constructor(private sectionsService: SectionsService) {
    this.sections = this.getSections();
  }

  getSections() {
    return this.sectionsService.getSections({active: true});
  }

  ngOnInit() {
    this.getSections();
  }

}
