import { TestBed } from '@angular/core/testing';
import { NgxCutOptionsService } from './ngx-cut-options.service';
import { NgxCutModule } from './ngx-cut.module';

describe('NgxCutOptionsService', () => {
  let service: NgxCutOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxCutModule]
    });
    service = TestBed.inject(NgxCutOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
