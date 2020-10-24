import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NgxCutModule } from './ngx-cut.module';
import { NgxCutService } from './ngx-cut.service';

describe('NgxCutService', () => {
  let service: NgxCutService;
  let renderer: jasmine.SpyObj<Renderer2>;
  let element: jasmine.SpyObj<ElementRef>;

  beforeEach(() => {
    element = jasmine.createSpyObj('ElementRef', ['nativeElement']);
    renderer = jasmine.createSpyObj('Renderer2', ['setStyle', 'removeStyle']);

    TestBed.configureTestingModule({
      imports: [NgxCutModule],
      providers: [
        { provide: Renderer2, useValue: renderer },
        { provide: ElementRef, useValue: element }
      ]
    });
    service = TestBed.inject(NgxCutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should setStyle with zero lines', () => {
    service.setStyle(element, renderer, 0);
    expect(renderer.removeStyle).toHaveBeenCalled();
  });

  it('should setStyle with 1 line', () => {
    service.setStyle(element, renderer, 1);
    expect(renderer.setStyle).toHaveBeenCalled();
  });

  it('should setStyle with 2 line', () => {
    service.setStyle(element, renderer, 2);
    expect(renderer.setStyle).toHaveBeenCalled();
  });
});
