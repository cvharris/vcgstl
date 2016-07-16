import { Component, ViewEncapsulation } from '@angular/core';
import { MainMenuComponent } from './main-menu';
import { SectionsComponent } from './sections';
import { FooterComponent } from './footer';

@Component({
  moduleId: module.id,
  host: {
    '[class.menuOpen]': 'menuOpen'
  },
  selector: 'website-app',
  templateUrl: 'website.component.html',
  styleUrls: ['website.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [MainMenuComponent, SectionsComponent, FooterComponent]
})
export class WebsiteAppComponent {
  title = 'Website works!';
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
