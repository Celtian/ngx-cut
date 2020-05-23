import { NgxCutOptionsService } from './ngx-cut-options.service';
import { NgxCutOptions } from './ngx-cut.module';

export function ngxCutOptionsFactory(options?: NgxCutOptions): NgxCutOptionsService {
  const ngxCutOptionsService = new NgxCutOptionsService();

  if (options) {
    if (typeof options.lines === 'number') {
      ngxCutOptionsService.lines = options.lines;
    }
  }

  return ngxCutOptionsService;
}
