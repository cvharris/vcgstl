/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ContactSectionComponent } from './contact-section.component';

describe('Component: ContactSection', () => {
  it('should create an instance', () => {
    let component = new ContactSectionComponent();
    expect(component).toBeTruthy();
  });
});
