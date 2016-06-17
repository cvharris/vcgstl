import {
  async,
  beforeEachProviders,
  describe,
  ddescribe,
  expect,
  iit,
  it,
  inject
} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import { provide, Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'test-component',
  template: `<div myHighlight></div>`
})
class TestComponent {}

describe('Highlight Directive', () => {
  beforeEachProviders((): any[] => []);

  it('should ...', async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(TestComponent).then((fixture: ComponentFixture<any>) => {
      fixture.detectChanges();
    });
  })));
});
