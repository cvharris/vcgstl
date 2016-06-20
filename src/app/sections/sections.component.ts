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

  constructor(private sectionsService: SectionsService) { }

  getSections() {
    this.sectionsService.getSections().then(sections => this.sections = sections);
  }

  ngOnInit() {
    this.getSections();
  }

}
