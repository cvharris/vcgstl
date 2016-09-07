import { Component, ViewEncapsulation } from '@angular/core';
import { MainMenuComponent } from './main-menu';
import { TopSectionComponent } from './top-section';
import { ServicesSectionComponent } from './services-section';
import { AboutSectionComponent } from './about-section';
import { ContactSectionComponent } from './contact-section';
import { FooterComponent } from './footer';

@Component({
  moduleId: module.id,
  host: {
    '[class.menuOpen]': 'menuOpen'
  },
  selector: 'website-app',
  templateUrl: 'website.component.html',
  styleUrls: ['website.component.less'],
  encapsulation: ViewEncapsulation.None,
  directives: [MainMenuComponent, TopSectionComponent, ServicesSectionComponent, AboutSectionComponent, ContactSectionComponent, FooterComponent]
})
export class WebsiteAppComponent {
  title = 'Website works!';
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
