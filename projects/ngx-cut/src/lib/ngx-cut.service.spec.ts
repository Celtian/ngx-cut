import { TestBed } from '@angular/core/testing';
import { NgxCutStyleService } from './ngx-cut-style.service';
import { NgxCutModule } from './ngx-cut.module';
import { NgxCutService } from './ngx-cut.service';


describe('NgxCutService', () => {
  let service: NgxCutService;
  let style: jasmine.SpyObj<NgxCutStyleService>;

  beforeEach(() => {
    style = jasmine.createSpyObj('NgxCutStyleService', ['createStyleSheet']);

    TestBed.configureTestingModule({
      imports: [NgxCutModule],
      providers: [{ provide: NgxCutStyleService, useValue: style }]
    });
    service = TestBed.inject(NgxCutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have to be called "style.createStyleSheet"', () => {
    expect(style.createStyleSheet).toHaveBeenCalled();
  });
});
