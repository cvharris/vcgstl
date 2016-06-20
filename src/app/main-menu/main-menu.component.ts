import { Component, OnInit } from '@angular/core';
import { SectionsService } from '../sections.service';
import { Section } from '../sections/section';
import { ActiveSectionPipe } from './active-section.pipe';

@Component({
  moduleId: module.id,
  selector: 'app-main-menu',
  templateUrl: 'main-menu.component.html',
  styleUrls: ['main-menu.component.css'],
  providers: [SectionsService],
  pipes: [ActiveSectionPipe]
})
export class MainMenuComponent implements OnInit {
  sections: Section[];

  constructor(private sectionsService: SectionsService) { }

  getSections() {
    this.sectionsService.getSections().then(sections => this.sections = sections);
  }

  ngOnInit() {
    this.getSections();
  }

}
