import { Component, ElementRef, NO_ERRORS_SCHEMA, Renderer2, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NgxCutEventTruncate } from './ngx-cut-options.interface';
import { NgxCutOptionsService } from './ngx-cut-options.service';
import { NgxCutDirective } from './ngx-cut.directive';
import { NgxCutService } from './ngx-cut.service';

const TEXT = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque porta. Vivamus ac leo pretium faucibus. Maecenas sollicitudin. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Morbi scelerisque luctus velit. Nam sed tellus id magna elementum tincidunt. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Integer lacinia. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci.';

describe('NgxCutDirective', () => {

  describe('Example with size number', () => {
    let renderer: jasmine.SpyObj<Renderer2>;
    let element: jasmine.SpyObj<ElementRef>;
    let options: jasmine.SpyObj<NgxCutOptionsService>;
    let service: jasmine.SpyObj<NgxCutService>;
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
      options = jasmine.createSpyObj('NgxCutOptionsService', ['size']);
      element = jasmine.createSpyObj('ElementRef', ['nativeElement']);
      service = jasmine.createSpyObj('NgxCutService', ['setStyle', 'setClass']);
      renderer = jasmine.createSpyObj('Renderer2', ['setStyle']);

      fixture = TestBed.configureTestingModule({
        declarations: [ TestDirectiveComponent, NgxCutDirective ],
        schemas:      [ NO_ERRORS_SCHEMA ],
        providers: [
          { provide: Renderer2, useValue: renderer },
          { provide: ElementRef, useValue: element },
          { provide: NgxCutService, useValue: service },
          { provide: NgxCutOptionsService, useValue: options },
        ]
      }).createComponent(TestDirectiveComponent);

      fixture.detectChanges();
    });

    it('should create an instance', () => {
      const directive = new NgxCutDirective(element, renderer, options, service);
      expect(directive).toBeTruthy();
    });

    it('should have to be called "service.setStyle"', () => {
      expect(service.setStyle).toHaveBeenCalled();
    });

    it('should emit change', fakeAsync(() => {
      tick(500);
      jasmine.clock().tick(1000);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const component = fixture.componentInstance;
        spyOn(component.directive.truncateChange, 'emit');
        fixture.detectChanges();
        expect(component.directive.truncateChange.emit).toHaveBeenCalled();
      })
    }))
  });


  describe('Example with size enum', () => {
    let renderer: jasmine.SpyObj<Renderer2>;
    let element: jasmine.SpyObj<ElementRef>;
    let options: jasmine.SpyObj<NgxCutOptionsService>;
    let service: jasmine.SpyObj<NgxCutService>;
    let fixture: ComponentFixture<TestEnumDirectiveComponent>;

    @Component({
      template: '<p ngxCut size="xs" [truncateDisabled]="false">{{ text }}</p>'
    })
    class TestEnumDirectiveComponent {
      public text = TEXT;
      @ViewChild(NgxCutDirective) public directive: NgxCutDirective;
    }

    beforeEach(() => {
      options = jasmine.createSpyObj('NgxCutOptionsService', ['size']);
      element = jasmine.createSpyObj('ElementRef', ['nativeElement']);
      service = jasmine.createSpyObj('NgxCutService', ['setStyle', 'setClass']);
      renderer = jasmine.createSpyObj('Renderer2', ['setStyle']);

      fixture = TestBed.configureTestingModule({
        declarations: [ TestEnumDirectiveComponent, NgxCutDirective ],
        schemas:      [ NO_ERRORS_SCHEMA ],
        providers: [
          { provide: Renderer2, useValue: renderer },
          { provide: ElementRef, useValue: element },
          { provide: NgxCutService, useValue: service },
          { provide: NgxCutOptionsService, useValue: options },
        ]
      }).createComponent(TestEnumDirectiveComponent);

      fixture.detectChanges();
    });

    it('should create an instance', () => {
      const directive = new NgxCutDirective(element, renderer, options, service);
      expect(directive).toBeTruthy();
    });

    it('should have to be called "service.setClass"', () => {
      expect(service.setClass).toHaveBeenCalled();
    });
  });
})
