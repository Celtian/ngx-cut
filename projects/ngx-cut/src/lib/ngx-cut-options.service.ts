import { Injectable } from '@angular/core';
import { NgxCutBreakpoints, NgxCutResponsiveSizes, NgxCutSizes } from './ngx-cut-options.interface';
import { DEFAULT_BREAKPOINTS, DEFAULT_RESPONSIVE_SIZES } from './ngx-cut.constants';

@Injectable()
export class NgxCutOptionsService {
  /**
   * @returns breakpoints - can be custom or predefined
   */
  public breakpoints: NgxCutBreakpoints = DEFAULT_BREAKPOINTS;
  /**
   * @returns number of truncated lines globaly
   */
  public size: NgxCutSizes = 1;
  /**
   * @returns aliases with defined number of lines for each breakpoint
   */
  public responsiveSizes: NgxCutResponsiveSizes = DEFAULT_RESPONSIVE_SIZES;
}
