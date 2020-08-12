import { TestBed } from '@angular/core/testing';
import { NgxCutModule } from './ngx-cut.module';
import { NgxCutService } from './ngx-cut.service';


describe('NgxCutService', () => {
  let service: NgxCutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxCutModule]
    });
    service = TestBed.inject(NgxCutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
