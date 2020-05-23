import { TestBed } from '@angular/core/testing';

import { NgxCutOptionsService } from './ngx-cut-options.service';

describe('NgxCutOptionsService', () => {
  let service: NgxCutOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCutOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
