import { NgxCutOptions } from './ngx-cut-options.interface';
import { NgxCutOptionsService } from './ngx-cut-options.service';
import { normalizeAllResponsiveSizes, selectBreakpoints } from './ngx-cut.utils';

export const ngxCutOptionsFactory = (options?: NgxCutOptions): NgxCutOptionsService => {
  const ngxCutOptionsService = new NgxCutOptionsService();

  if (options) {
    if (options.size) {
      ngxCutOptionsService.size = options.size;
    }
    if (options.responsiveSizes) {
      ngxCutOptionsService.responsiveSizes = normalizeAllResponsiveSizes(options.responsiveSizes);
    }
    if (options.breakpoints) {
      ngxCutOptionsService.breakpoints = selectBreakpoints(options.breakpoints);
    }
  }

  return ngxCutOptionsService;
};
