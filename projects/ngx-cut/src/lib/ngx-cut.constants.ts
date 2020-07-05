import { NgxCutBreakpoints, NgxCutResponsiveSizes } from './ngx-cut-options.interface';

export const DEFAULT_RESPONSIVE_SIZES: NgxCutResponsiveSizes = {
  xs: { xs: 2, sm: 2, md: 3, lg: 3, xl: 4 },
  sm: { xs: 3, sm: 3, md: 4, lg: 4, xl: 5 },
  md: { xs: 4, sm: 4, md: 5, lg: 5, xl: 6 },
  lg: { xs: 5, sm: 5, md: 6, lg: 6, xl: 7 },
  xl: { xs: 6, sm: 6, md: 7, lg: 7, xl: 8 }
};

// https://material.io/design/layout/responsive-layout-grid.html#breakpoints
export const CDK_BREAKPOINTS: NgxCutBreakpoints = {
  sm: 600,
  md: 1024,
  lg: 1440,
  xl: 1920
};

// https://github.com/angular/flex-layout/wiki/Responsive-API
export const FX_LAYOUT_BREAKPOINTS: NgxCutBreakpoints = {
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};

// https://getbootstrap.com/docs/4.5/layout/overview/#responsive-breakpoints
export const BOOTSTRAP_BREAKPOINTS: NgxCutBreakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

export const DEFAULT_BREAKPOINTS = BOOTSTRAP_BREAKPOINTS;
