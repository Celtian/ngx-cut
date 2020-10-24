import { Component, ElementRef, NO_ERRORS_SCHEMA, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxCutOptionsService } from './ngx-cut-options.service';
import { NgxCutDirective } from './ngx-cut.directive';
import { NgxCutService } from './ngx-cut.service';

const TEXT = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque porta. Vivamus ac leo pretium faucibus. Maecenas sollicitudin. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Morbi scelerisque luctus velit. Nam sed tellus id magna elementum tincidunt. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Integer lacinia. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci.';

@Component({
  template: '<p ngxCut [size]="2">{{ text }}</p>'
})
class TestDirectiveComponent {
  public text = TEXT;
}

describe('NgxCutDirective', () => {
  let renderer: jasmine.SpyObj<Renderer2>;
  let element: jasmine.SpyObj<ElementRef>;
  let options: jasmine.SpyObj<NgxCutOptionsService>;
  let service: jasmine.SpyObj<NgxCutService>;
  let fixture: ComponentFixture<TestDirectiveComponent>;

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
});
