import { ngxCutOptionsFactory } from './ngx-cut-options-factory';
import { NgxCutOptionsService } from './ngx-cut-options.service';

describe('NgxCutOptionsFactory', () => {
  it('should return instance of NgxCutOptionsService', () => {
    expect(ngxCutOptionsFactory()).toBeInstanceOf(NgxCutOptionsService);
  });
});
