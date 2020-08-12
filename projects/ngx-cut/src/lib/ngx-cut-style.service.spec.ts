import { TestBed } from '@angular/core/testing';
import { NgxCutStyleService } from './ngx-cut-style.service';
import { NgxCutModule } from './ngx-cut.module';


describe('NgxCutStyleService', () => {
  let service: NgxCutStyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxCutModule]
    });
    service = TestBed.inject(NgxCutStyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
