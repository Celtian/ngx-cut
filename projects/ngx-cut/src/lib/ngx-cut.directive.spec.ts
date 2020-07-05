import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NgxCutOptionsService } from './ngx-cut-options.service';
import { NgxCutDirective } from './ngx-cut.directive';
import { NgxCutService } from './ngx-cut.service';

describe('NgxCutTruncateParagraphDirective', () => {
  const element: jasmine.SpyObj<ElementRef> = null;
  const renderer: jasmine.SpyObj<Renderer2> = null;
  let optionsServiceSpy: jasmine.SpyObj<NgxCutOptionsService>;
  const service: jasmine.SpyObj<NgxCutService> = null;

  beforeEach(() => {
    optionsServiceSpy = jasmine.createSpyObj('NgxCutOptionsService', ['size']);

    TestBed.configureTestingModule({
      providers: [ElementRef, Renderer2, NgxCutService,
        { provide: NgxCutOptionsService, useValue: optionsServiceSpy },
      ]
    });
  });

  it('should create an instance', () => {
    const directive = new NgxCutDirective(element, renderer, optionsServiceSpy, service);
    expect(directive).toBeTruthy();
  });
});
