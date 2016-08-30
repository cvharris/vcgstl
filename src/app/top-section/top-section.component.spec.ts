/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TopSectionComponent } from './top-section.component';

describe('Component: TopSection', () => {
  it('should create an instance', () => {
    let component = new TopSectionComponent();
    expect(component).toBeTruthy();
  });
});
