export interface NgxCutBreakpoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface NgxCutResponsiveSize {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export type NgxCutResponsiveSizeOrNumber = number | NgxCutResponsiveSize;

export type NgxCutSizesOnlyResponsive = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type NgxCutSizes = number | NgxCutSizesOnlyResponsive;

export interface NgxCutStyles {
  xs: NgxCutStylesBreakpointData;
  sm: NgxCutStylesBreakpointData;
  md: NgxCutStylesBreakpointData;
  lg: NgxCutStylesBreakpointData;
  xl: NgxCutStylesBreakpointData;
}

export interface NgxCutStylesBreakpointData {
  xs: NgxCutStylesSizeAndBreakpoint;
  sm: NgxCutStylesSizeAndBreakpoint;
  md: NgxCutStylesSizeAndBreakpoint;
  lg: NgxCutStylesSizeAndBreakpoint;
  xl: NgxCutStylesSizeAndBreakpoint;
}

export interface NgxCutStylesSizeAndBreakpoint {
  size: number;
  breakpoint?: number;
}

export interface NgxCutResponsiveSizes {
  xs: NgxCutResponsiveSize;
  sm: NgxCutResponsiveSize;
  md: NgxCutResponsiveSize;
  lg: NgxCutResponsiveSize;
  xl: NgxCutResponsiveSize;
}

export interface NgxCutOptionsResponsiveSizes {
  xs: NgxCutResponsiveSizeOrNumber;
  sm: NgxCutResponsiveSizeOrNumber;
  md: NgxCutResponsiveSizeOrNumber;
  lg: NgxCutResponsiveSizeOrNumber;
  xl: NgxCutResponsiveSizeOrNumber;
}

export type NgxCutPredefinedBreakpoints = 'BOOTSTRAP' | 'FX_LAYOUT' | 'CDK';
export type NgxCutBreakpointsOrPredefinedBreakpoints = NgxCutBreakpoints | NgxCutPredefinedBreakpoints;

export interface NgxCutOptions {
  breakpoints?: NgxCutBreakpointsOrPredefinedBreakpoints;
  size?: NgxCutSizes;
  responsiveSizes?: NgxCutOptionsResponsiveSizes;
}

export interface NgxCutEventTruncate {
  truncated: boolean;
  size: NgxCutSizes;
  truncateDisabled: boolean;
  offsetHeight: any;
  scrollHeight: any;
}
