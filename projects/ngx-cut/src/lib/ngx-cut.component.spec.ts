import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCutComponent } from './ngx-cut.component';

describe('NgxCutComponent', () => {
  let component: NgxCutComponent;
  let fixture: ComponentFixture<NgxCutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
