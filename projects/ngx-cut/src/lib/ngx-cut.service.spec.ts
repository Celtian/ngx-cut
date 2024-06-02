import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NgxCutModule } from './ngx-cut.module';
import { NgxCutService } from './ngx-cut.service';

describe('NgxCutService', () => {
  let service: NgxCutService;
  let renderer: jest.Mocked<Renderer2>;
  let element: jest.Mocked<ElementRef>;

  beforeEach(() => {
    element = { nativeElement: jest.fn() } as unknown as jest.Mocked<ElementRef>;
    renderer = {
      setStyle: jest.fn(),
      removeStyle: jest.fn(),
      removeClass: jest.fn(),
      addClass: jest.fn()
    } as unknown as jest.Mocked<Renderer2>;

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

  it('should setStyle with 2 lines', () => {
    service.setStyle(element, renderer, 2);
    expect(renderer.setStyle).toHaveBeenCalled();
  });

  it('should removeClass if size argument is missing', () => {
    service.setClass(element, renderer);
    expect(renderer.removeClass).toHaveBeenCalled();
  });

  it('should addClass if argument size is present', () => {
    service.setClass(element, renderer, 'xs');
    expect(renderer.addClass).toHaveBeenCalled();
  });
});
