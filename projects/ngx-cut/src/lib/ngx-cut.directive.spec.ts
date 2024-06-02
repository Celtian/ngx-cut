import { Component, ElementRef, NO_ERRORS_SCHEMA, Renderer2, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NgxCutEventTruncate } from './ngx-cut-options.interface';
import { NgxCutOptionsService } from './ngx-cut-options.service';
import { NgxCutDirective } from './ngx-cut.directive';
import { NgxCutService } from './ngx-cut.service';

const TEXT =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque porta. Vivamus ac leo pretium faucibus. Maecenas sollicitudin. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Morbi scelerisque luctus velit. Nam sed tellus id magna elementum tincidunt. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Integer lacinia. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci.';

describe('NgxCutDirective', () => {
  describe('Example with size number', () => {
    let renderer: jest.Mocked<Renderer2>;
    let element: jest.Mocked<ElementRef>;
    let options: jest.Mocked<NgxCutOptionsService>;
    let service: jest.Mocked<NgxCutService>;
    let fixture: ComponentFixture<TestDirectiveComponent>;

    @Component({
      template: '<p ngxCut [size]="2" [truncateDisabled]="false" (truncateChange)="onTruncate($event)">{{ text }}</p>'
    })
    class TestDirectiveComponent {
      public text = TEXT;
      @ViewChild(NgxCutDirective) public directive: NgxCutDirective;
      public onTruncate(event: NgxCutEventTruncate): void {
        this.event = event;
      }
      public event: NgxCutEventTruncate;
    }

    beforeEach(() => {
      options = {
        size: jest.fn()
      } as unknown as jest.Mocked<NgxCutOptionsService>;
      element = {
        nativeElement: jest.fn()
      } as unknown as jest.Mocked<ElementRef>;
      service = {
        setStyle: jest.fn(),
        setClass: jest.fn()
      } as unknown as jest.Mocked<NgxCutService>;
      renderer = {
        setStyle: jest.fn()
      } as unknown as jest.Mocked<Renderer2>;

      fixture = TestBed.configureTestingModule({
        declarations: [TestDirectiveComponent, NgxCutDirective],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [
          { provide: Renderer2, useValue: renderer },
          { provide: ElementRef, useValue: element },
          { provide: NgxCutService, useValue: service },
          { provide: NgxCutOptionsService, useValue: options }
        ]
      }).createComponent(TestDirectiveComponent);

      fixture.detectChanges();
    });

    it('should create an instance', () => {
      const directive = new NgxCutDirective(element, renderer, options, service);
      expect(directive).toBeTruthy();
    });

    it('should have called "service.setStyle"', () => {
      expect(service.setStyle).toHaveBeenCalled();
    });

    it('should emit change', fakeAsync(() => {
      tick(500);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const component = fixture.componentInstance;
        jest.spyOn(component.directive.truncateChange, 'emit');
        fixture.detectChanges();
        expect(component.directive.truncateChange.emit).toHaveBeenCalled();
      });
    }));
  });

  describe('Example with size enum', () => {
    let renderer: jest.Mocked<Renderer2>;
    let element: jest.Mocked<ElementRef>;
    let options: jest.Mocked<NgxCutOptionsService>;
    let service: jest.Mocked<NgxCutService>;
    let fixture: ComponentFixture<TestEnumDirectiveComponent>;

    @Component({
      template: '<p ngxCut size="xs" [truncateDisabled]="false">{{ text }}</p>'
    })
    class TestEnumDirectiveComponent {
      public text = TEXT;
      @ViewChild(NgxCutDirective) public directive: NgxCutDirective;
    }

    beforeEach(() => {
      options = {
        size: jest.fn()
      } as unknown as jest.Mocked<NgxCutOptionsService>;
      element = {
        nativeElement: jest.fn()
      } as unknown as jest.Mocked<ElementRef>;
      service = {
        setStyle: jest.fn(),
        setClass: jest.fn()
      } as unknown as jest.Mocked<NgxCutService>;
      renderer = {
        setStyle: jest.fn()
      } as unknown as jest.Mocked<Renderer2>;

      fixture = TestBed.configureTestingModule({
        declarations: [TestEnumDirectiveComponent, NgxCutDirective],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [
          { provide: Renderer2, useValue: renderer },
          { provide: ElementRef, useValue: element },
          { provide: NgxCutService, useValue: service },
          { provide: NgxCutOptionsService, useValue: options }
        ]
      }).createComponent(TestEnumDirectiveComponent);

      fixture.detectChanges();
    });

    it('should create an instance', () => {
      const directive = new NgxCutDirective(element, renderer, options, service);
      expect(directive).toBeTruthy();
    });

    it('should have called "service.setClass"', () => {
      expect(service.setClass).toHaveBeenCalled();
    });
  });
});
