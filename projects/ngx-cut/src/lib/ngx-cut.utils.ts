import {
  NgxCutBreakpoints,
  NgxCutBreakpointsOrPredefinedBreakpoints,
  NgxCutOptionsResponsiveSizes,
  NgxCutPredefinedBreakpoints,
  NgxCutResponsiveSize,
  NgxCutResponsiveSizeOrNumber,
  NgxCutResponsiveSizes,
  NgxCutSizes,
  NgxCutSizesOnlyResponsive,
  NgxCutStyles,
  NgxCutStylesBreakpointData
} from './ngx-cut-options.interface';
import {
  BOOTSTRAP_BREAKPOINTS,
  CDK_BREAKPOINTS,
  DEFAULT_BREAKPOINTS,
  FX_LAYOUT_BREAKPOINTS
} from './ngx-cut.constants';

export const isIntValue = (value: any): boolean => {
  return !isNaN(parseFloat(value as any)) && !isNaN(Number(value)) && Number.isInteger(Number(value));
};

/**
 *
 * @param value can be anything
 * @param fallbackValue integer value or 0
 * @description ispired by https://github.com/angular/components/blob/master/src/cdk/coercion/number-property.ts
 */
export const coerceIntProperty = (value: any, fallbackValue = 0): number => {
  return isIntValue(value) ? Number(value) : fallbackValue;
};

/**
 *
 * @param value anything
 * @returns valid value or undefined
 */
export const coerceNgxCutSizes = (value: any): NgxCutSizes => {
  if (['xs', 'sm', 'md', 'lg', 'xl'].includes(value)) {
    return value;
  } else {
    const v = coerceIntProperty(value);
    if (v > 0) {
      return v;
    }
    return 1;
  }
};

/**
 *
 * @param value number or object
 * @returns object
 */
export const normalizeResponsiveSize = (value: NgxCutResponsiveSizeOrNumber): NgxCutResponsiveSize => {
  if (!value) {
    return { xs: 1, sm: 1, md: 1, lg: 1, xl: 1 };
  } else if (typeof value === 'number') {
    let v = (value = coerceIntProperty(value));
    if (v < 1) {
      v = 1;
    }
    return { xs: v, sm: v, md: v, lg: v, xl: v };
  } else {
    const v = value as NgxCutResponsiveSize;
    v.xs = v.xs < 1 ? 1 : v.xs;
    v.sm = v.sm < 1 ? 1 : v.sm;
    v.md = v.md < 1 ? 1 : v.md;
    v.lg = v.lg < 1 ? 1 : v.lg;
    v.xl = v.xl < 1 ? 1 : v.xl;
    return v;
  }
};

/**
 *
 * @param value responsive options for all size
 * @returns notmalized values, it means size > 0
 */
export const normalizeAllResponsiveSizes = (value: NgxCutOptionsResponsiveSizes): NgxCutResponsiveSizes => {
  if (!value) {
    return undefined;
  }
  return {
    xs: normalizeResponsiveSize(value.xs),
    sm: normalizeResponsiveSize(value.sm),
    md: normalizeResponsiveSize(value.md),
    lg: normalizeResponsiveSize(value.lg),
    xl: normalizeResponsiveSize(value.xl)
  };
};

/**
 *
 * @param breakpoints custom breakpoints
 */
export const selectBreakpoints = (breakpoints: NgxCutBreakpointsOrPredefinedBreakpoints): NgxCutBreakpoints => {
  if (breakpoints && typeof breakpoints === 'string') {
    const bp = String(breakpoints) as NgxCutPredefinedBreakpoints;
    switch (bp) {
      case 'BOOTSTRAP':
        return BOOTSTRAP_BREAKPOINTS;
      case 'CDK':
        return CDK_BREAKPOINTS;
      case 'FX_LAYOUT':
        return FX_LAYOUT_BREAKPOINTS;
    }
  } else if (breakpoints && typeof breakpoints === 'object') {
    return breakpoints;
  }
  return DEFAULT_BREAKPOINTS;
};

/**
 *
 * @param breakpoints breakpoint for used in media querries
 * @param responsiveSizes how many lines should be truncated for each brakpoint
 * @returns dto object used for creating stylesheet
 */
export const extractStyleSheetData = (
  breakpoints: NgxCutBreakpoints,
  responsiveSizes: NgxCutResponsiveSizes
): NgxCutStyles => {
  if (!breakpoints || !responsiveSizes) {
    return undefined;
  }
  const { xs, sm, md, lg, xl } = responsiveSizes;
  return {
    xs: {
      xs: { size: xs.xs, breakpoint: null },
      sm: { size: xs.sm, breakpoint: breakpoints.sm },
      md: { size: xs.md, breakpoint: breakpoints.md },
      lg: { size: xs.lg, breakpoint: breakpoints.lg },
      xl: { size: xs.xl, breakpoint: breakpoints.xl }
    },
    sm: {
      xs: { size: sm.xs, breakpoint: null },
      sm: { size: sm.sm, breakpoint: breakpoints.sm },
      md: { size: sm.md, breakpoint: breakpoints.md },
      lg: { size: sm.lg, breakpoint: breakpoints.lg },
      xl: { size: sm.xl, breakpoint: breakpoints.xl }
    },
    md: {
      xs: { size: md.xs, breakpoint: null },
      sm: { size: md.sm, breakpoint: breakpoints.sm },
      md: { size: md.md, breakpoint: breakpoints.md },
      lg: { size: md.lg, breakpoint: breakpoints.lg },
      xl: { size: md.xl, breakpoint: breakpoints.xl }
    },
    lg: {
      xs: { size: lg.xs, breakpoint: null },
      sm: { size: lg.sm, breakpoint: breakpoints.sm },
      md: { size: lg.md, breakpoint: breakpoints.md },
      lg: { size: lg.lg, breakpoint: breakpoints.lg },
      xl: { size: lg.xl, breakpoint: breakpoints.xl }
    },
    xl: {
      xs: { size: xl.xs, breakpoint: null },
      sm: { size: xl.sm, breakpoint: breakpoints.sm },
      md: { size: xl.md, breakpoint: breakpoints.md },
      lg: { size: xl.lg, breakpoint: breakpoints.lg },
      xl: { size: xl.xl, breakpoint: breakpoints.xl }
    }
  };
};

/**
 *
 * @param key used for class name
 * @param data used for parameters
 * @returns css stylesheet based on input data
 */
export const createCss = (key: NgxCutSizesOnlyResponsive, data: NgxCutStylesBreakpointData): string => {
  const sheet: string[] = [];
  for (const [k, v] of Object.entries(data)) {
    if (v.breakpoint) {
      sheet.push(`
      @media screen and (min-width:${v.breakpoint}px) {
        .ngx-cut-${key} {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: ${v.size};
          -webkit-box-orient: vertical;
        }
      }`);
    } else {
      sheet.push(`
      .ngx-cut-${key} {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: ${v.size};
        -webkit-box-orient: vertical;
      }`);
    }
  }
  return sheet.join('\n');
};
