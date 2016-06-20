import { Component, ViewEncapsulation } from '@angular/core';
import { TitleBarComponent } from './title-bar';
import { SectionsComponent } from './sections';
import { FooterComponent } from './footer';

@Component({
  moduleId: module.id,
  selector: 'website-app',
  templateUrl: 'website.component.html',
  styleUrls: ['website.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [TitleBarComponent, SectionsComponent, FooterComponent]
})
export class WebsiteAppComponent {
  title = 'Website works!';
}
