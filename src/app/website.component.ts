import { Component, ViewEncapsulation } from '@angular/core';
import { TitleBarComponent } from './title-bar';
import { MainMenuComponent } from './main-menu';
import { SectionComponent } from './section';
import { FooterComponent } from './footer';

@Component({
  moduleId: module.id,
  selector: 'website-app',
  templateUrl: 'website.component.html',
  styleUrls: ['website.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [TitleBarComponent, MainMenuComponent, SectionComponent, FooterComponent]
})
export class WebsiteAppComponent {
  title = 'Website works!';
}
