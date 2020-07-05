import { TestBed } from '@angular/core/testing';

import { NgxCutStyleService } from './ngx-cut-style.service';

describe('NgxCutStyleService', () => {
  let service: NgxCutStyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCutStyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
