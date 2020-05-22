import { TestBed } from '@angular/core/testing';

import { NgxCutService } from './ngx-cut.service';

describe('NgxCutService', () => {
  let service: NgxCutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
