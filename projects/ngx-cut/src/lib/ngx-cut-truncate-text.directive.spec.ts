import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NgxCutTruncateTextDirective } from './ngx-cut-truncate-text.directive';
import { NgxCutService } from './ngx-cut.service';

describe('NgxCutTruncateTextDirective', () => {
  const element: jasmine.SpyObj<ElementRef> = null;
  const renderer: jasmine.SpyObj<Renderer2> = null;
  const service: jasmine.SpyObj<NgxCutService> = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElementRef, Renderer2]
    });
  });

  it('should create an instance', () => {
    const directive = new NgxCutTruncateTextDirective(element, renderer, service);
    expect(directive).toBeTruthy();
  });
});
