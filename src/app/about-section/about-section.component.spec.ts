/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AboutSectionComponent } from './about-section.component';

describe('Component: AboutSection', () => {
  it('should create an instance', () => {
    let component = new AboutSectionComponent();
    expect(component).toBeTruthy();
  });
});
