import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NgxCutTruncateParagraphDirective } from './ngx-cut-truncate-paragraph.directive';

describe('NgxCutTruncateParagraphDirective', () => {
  const element: jasmine.SpyObj<ElementRef> = null;
  const renderer: jasmine.SpyObj<Renderer2> = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElementRef, Renderer2]
    });
  });

  it('should create an instance', () => {
    const directive = new NgxCutTruncateParagraphDirective(element, renderer);
    expect(directive).toBeTruthy();
  });
});
