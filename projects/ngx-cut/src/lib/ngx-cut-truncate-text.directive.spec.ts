import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NgxCutTruncateTextDirective } from './ngx-cut-truncate-text.directive';

describe('NgxCutTruncateTextDirective', () => {
  const element: jasmine.SpyObj<ElementRef> = null;
  const renderer: jasmine.SpyObj<Renderer2> = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElementRef, Renderer2]
    });
  });

  it('should create an instance', () => {
    const directive = new NgxCutTruncateTextDirective(element, renderer);
    expect(directive).toBeTruthy();
  });
});
