/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { WebsiteAppComponent } from '../app/website.component';

describe('App: VCGSTL', () => {
  beforeEach(() => {
    TestBed.ConfigureTestingModule({
      declarations: [
        WebsiteAppComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(WebsiteAppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have as title \'website works!\'', async(() => {
    let fixture = TestBed.createComponent(WebsiteAppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('website works!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(WebsiteAppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});