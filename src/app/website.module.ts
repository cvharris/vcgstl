import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WebsiteAppComponent } from './website.component';

@NgModule({
  declarations: [
    WebsiteAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [WebsiteAppComponent]
})
export class WebsiteModule { }
