import { Component, OnInit } from '@angular/core';
import { MainMenuComponent } from '../main-menu';

@Component({
  moduleId: module.id,
  selector: 'app-title-bar',
  templateUrl: 'title-bar.component.html',
  styleUrls: ['title-bar.component.css'],
  directives: [MainMenuComponent]
})
export class TitleBarComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
