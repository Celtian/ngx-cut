import { TAILWIND_BREAKPOINTS } from '.';
import {
  NgxCutBreakpoints,
  NgxCutResponsiveSizes,
  NgxCutStyles
} from './ngx-cut-options.interface';
import {
  BOOTSTRAP_BREAKPOINTS,
  CDK_BREAKPOINTS,
  DEFAULT_BREAKPOINTS,
  DEFAULT_RESPONSIVE_SIZES,
  FX_LAYOUT_BREAKPOINTS
} from './ngx-cut.constants';
import {
  coerceIntProperty,
  coerceNgxCutSizes,
  createCss,
  extractStyleSheetData,
  isIntValue,
  normalizeAllResponsiveSizes,
  normalizeResponsiveSize,
  selectBreakpoints
} from './ngx-cut.utils';

describe('NgxCutUtils', () => {

  describe('isIntValue', () => {
    it('should validate undefined and return false', () => {
      expect(isIntValue(undefined)).toBe(false);
    });

    it('should validate null and return false', () => {
      expect(isIntValue(null)).toBe(false);
    });

    it('should validate string and return false', () => {
      expect(isIntValue('some string')).toBe(false);
    });

    it('should validate string as decimal number and return false', () => {
      expect(isIntValue('12.11')).toBe(false);
      expect(isIntValue('-12.11')).toBe(false);
    });

    it('should validate string as number and return false', () => {
      expect(isIntValue('12')).toBe(true);
      expect(isIntValue('-12')).toBe(true);
    });

    it('should validate boolean return false', () => {
      expect(isIntValue(true)).toBe(false);
      expect(isIntValue(false)).toBe(false);
    });

    it('should validate array return false', () => {
      expect(isIntValue([])).toBe(false);
    });

    it('should validate object return false', () => {
      expect(isIntValue({})).toBe(false);
    });

    it('should validate number return false', () => {
      expect(isIntValue(10)).toBe(true);
      expect(isIntValue(-10)).toBe(true);
    });

    it('should validate decimal number return false', () => {
      expect(isIntValue(10.02)).toBe(false);
      expect(isIntValue(-10.02)).toBe(false);
    });
  });

  describe('coerceIntProperty', () => {

    it('should coerce undefined to 0 or default', () => {
      expect(coerceIntProperty(undefined)).toBe(0);
      expect(coerceIntProperty(undefined, 111)).toBe(111);
    });

    it('should coerce null to 0 or default', () => {
      expect(coerceIntProperty(null)).toBe(0);
      expect(coerceIntProperty(null, 111)).toBe(111);
    });

    it('should coerce true to 0 or default', () => {
      expect(coerceIntProperty(true)).toBe(0);
      expect(coerceIntProperty(true, 111)).toBe(111);
    });

    it('should coerce false to 0 or default', () => {
      expect(coerceIntProperty(false)).toBe(0);
      expect(coerceIntProperty(false, 111)).toBe(111);

    });

    it('should coerce the empty string to 0 or default', () => {
      expect(coerceIntProperty('')).toBe(0);
      expect(coerceIntProperty('', 111)).toBe(111);

    });

    it('should coerce the string "1" to 1', () => {
      expect(coerceIntProperty('1')).toBe(1);
      expect(coerceIntProperty('1', 111)).toBe(1);
    });

    it('should coerce the string "123.456" to 123.456', () => {
      expect(coerceIntProperty('123.456')).toBe(0);
      expect(coerceIntProperty('123.456', 111)).toBe(111);
    });

    it('should coerce the string "-123.456" to -123.456', () => {
      expect(coerceIntProperty('-123.456')).toBe(0);
      expect(coerceIntProperty('-123.456', 111)).toBe(111);
    });

    it('should coerce an arbitrary string to 0 or default', () => {
      expect(coerceIntProperty('pink')).toBe(0);
      expect(coerceIntProperty('pink', 111)).toBe(111);
    });

    it('should coerce an arbitrary string prefixed with a number to 0 or default', () => {
      expect(coerceIntProperty('123pink')).toBe(0);
      expect(coerceIntProperty('123pink', 111)).toBe(111);
    });

    it('should coerce the number 1 to 1', () => {
      expect(coerceIntProperty(1)).toBe(1);
      expect(coerceIntProperty(1, 111)).toBe(1);
    });

    it('should coerce the number 123.456 to 123.456', () => {
      expect(coerceIntProperty(123.456)).toBe(0);
      expect(coerceIntProperty(123.456, 111)).toBe(111);
    });

    it('should coerce the number -123.456 to -123.456', () => {
      expect(coerceIntProperty(-123.456)).toBe(0);
      expect(coerceIntProperty(-123.456, 111)).toBe(111);
    });

    it('should coerce an object to 0 or default', () => {
      expect(coerceIntProperty({})).toBe(0);
      expect(coerceIntProperty({}, 111)).toBe(111);
    });

    it('should coerce an array to 0 or default', () => {
      expect(coerceIntProperty([])).toBe(0);
      expect(coerceIntProperty([], 111)).toBe(111);
    });
  });

  describe('normalizeResponsiveSize', () => {

    it('should normalize 1', () => {
      expect(normalizeResponsiveSize(1)).toEqual({ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 });
    });

    it('should normalize "{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }"', () => {
      expect(normalizeResponsiveSize({ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }))
        .toEqual({ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 });
    });

    it('should normalize -1 or 0', () => {
      expect(normalizeResponsiveSize(-1)).toEqual({ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 });
      expect(normalizeResponsiveSize(0)).toEqual({ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 });
    });

    it('should normalize "{ xs: 1, sm: -1, md: 1, lg: -1, xl: 1 }"', () => {
      expect(normalizeResponsiveSize({ xs: 1, sm: -1, md: 1, lg: -1, xl: 1 }))
        .toEqual({ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 });
    });

    it('should normalize null or undefined', () => {
      expect(normalizeResponsiveSize(null)).toEqual({ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 });
      expect(normalizeResponsiveSize(undefined)).toEqual({ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 });
    });
  });

  describe('normalizeAllResponsiveSizes', () => {

    it('should normalize common input', () => {
      expect(normalizeAllResponsiveSizes({
        xs: { xs: 2, sm: 2, md: 3, lg: 3, xl: 4 },
        sm: { xs: 3, sm: 3, md: 4, lg: 4, xl: 5 },
        md: { xs: 4, sm: 4, md: 5, lg: 5, xl: 6 },
        lg: { xs: 5, sm: 5, md: 6, lg: 6, xl: 7 },
        xl: { xs: 6, sm: 6, md: 7, lg: 7, xl: 8 }
      })).toEqual(
        {
          xs: { xs: 2, sm: 2, md: 3, lg: 3, xl: 4 },
          sm: { xs: 3, sm: 3, md: 4, lg: 4, xl: 5 },
          md: { xs: 4, sm: 4, md: 5, lg: 5, xl: 6 },
          lg: { xs: 5, sm: 5, md: 6, lg: 6, xl: 7 },
          xl: { xs: 6, sm: 6, md: 7, lg: 7, xl: 8 }
        });

      expect(normalizeAllResponsiveSizes({
        xs: 2,
        sm: 3,
        md: { xs: 4, sm: 4, md: 5, lg: 5, xl: 6 },
        lg: { xs: 5, sm: 5, md: 6, lg: 6, xl: 7 },
        xl: { xs: 6, sm: 6, md: 7, lg: 7, xl: 8 }
      })).toEqual(
        {
          xs: { xs: 2, sm: 2, md: 2, lg: 2, xl: 2 },
          sm: { xs: 3, sm: 3, md: 3, lg: 3, xl: 3 },
          md: { xs: 4, sm: 4, md: 5, lg: 5, xl: 6 },
          lg: { xs: 5, sm: 5, md: 6, lg: 6, xl: 7 },
          xl: { xs: 6, sm: 6, md: 7, lg: 7, xl: 8 }
        });
    });

    it('should normalize null or undefined to undefined', () => {
      expect(normalizeAllResponsiveSizes(null)).toEqual(undefined);
      expect(normalizeAllResponsiveSizes(undefined)).toEqual(undefined);
    });
  });

  describe('coerceNgxCutSizes', () => {

    it('should coerce "xs" to "xs"', () => {
      expect(coerceNgxCutSizes('xs')).toEqual('xs');
    });

    it('should coerce "sm" to "sm"', () => {
      expect(coerceNgxCutSizes('sm')).toEqual('sm');
    });

    it('should coerce "md" to "md"', () => {
      expect(coerceNgxCutSizes('md')).toEqual('md');
    });

    it('should coerce "lg" to "lg"', () => {
      expect(coerceNgxCutSizes('lg')).toEqual('lg');
    });

    it('should coerce "xl" to "xl"', () => {
      expect(coerceNgxCutSizes('xl')).toEqual('xl');
    });

    it('should coerce 1 to 1', () => {
      expect(coerceNgxCutSizes(1)).toEqual(1);
    });

    it('should coerce 2 to 2', () => {
      expect(coerceNgxCutSizes(2)).toEqual(2);
    });

    it('should coerce -1 or 0 to 1', () => {
      expect(coerceNgxCutSizes(-1)).toEqual(1);
      expect(coerceNgxCutSizes(0)).toEqual(1);
    });

    it('should coerce null or undefined into 1', () => {
      expect(coerceNgxCutSizes(null)).toEqual(1);
      expect(coerceNgxCutSizes(undefined)).toEqual(1);
    });
  });

  describe('selectBreakpoints', () => {

    it('should select predefined breakpoints', () => {
      expect(selectBreakpoints('BOOTSTRAP')).toEqual(BOOTSTRAP_BREAKPOINTS);
      expect(selectBreakpoints('CDK')).toEqual(CDK_BREAKPOINTS);
      expect(selectBreakpoints('FX_LAYOUT')).toEqual(FX_LAYOUT_BREAKPOINTS);
      expect(selectBreakpoints('TAILWIND')).toEqual(TAILWIND_BREAKPOINTS);
    });

    it('should select custom breakpoints', () => {
      const customBreakpoints: NgxCutBreakpoints = {
        sm: 200,
        md: 300,
        lg: 400,
        xl: 500
      };
      expect(selectBreakpoints(customBreakpoints)).toEqual(customBreakpoints);
    });

    it('should select default breakpoints when null or undefined', () => {
      expect(selectBreakpoints(null)).toEqual(DEFAULT_BREAKPOINTS);
      expect(selectBreakpoints(undefined)).toEqual(DEFAULT_BREAKPOINTS);
    });
  });

  describe('extractStyleSheetData', () => {

    it('should convert responsive sizes & breakpoints into single object', () => {
      const responsiveSizes: NgxCutResponsiveSizes = DEFAULT_RESPONSIVE_SIZES;
      const breakpoints: NgxCutBreakpoints = DEFAULT_BREAKPOINTS;
      expect(extractStyleSheetData(breakpoints, responsiveSizes)).toEqual(
        {
          xs: {
            xs: { size: responsiveSizes.xs.xs, breakpoint: null },
            sm: { size: responsiveSizes.xs.sm, breakpoint: breakpoints.sm },
            md: { size: responsiveSizes.xs.md, breakpoint: breakpoints.md },
            lg: { size: responsiveSizes.xs.lg, breakpoint: breakpoints.lg },
            xl: { size: responsiveSizes.xs.xl, breakpoint: breakpoints.xl }
          },
          sm: {
            xs: { size: responsiveSizes.sm.xs, breakpoint: null },
            sm: { size: responsiveSizes.sm.sm, breakpoint: breakpoints.sm },
            md: { size: responsiveSizes.sm.md, breakpoint: breakpoints.md },
            lg: { size: responsiveSizes.sm.lg, breakpoint: breakpoints.lg },
            xl: { size: responsiveSizes.sm.xl, breakpoint: breakpoints.xl }
          },
          md: {
            xs: { size: responsiveSizes.md.xs, breakpoint: null },
            sm: { size: responsiveSizes.md.sm, breakpoint: breakpoints.sm },
            md: { size: responsiveSizes.md.md, breakpoint: breakpoints.md },
            lg: { size: responsiveSizes.md.lg, breakpoint: breakpoints.lg },
            xl: { size: responsiveSizes.md.xl, breakpoint: breakpoints.xl }
          },
          lg: {
            xs: { size: responsiveSizes.lg.xs, breakpoint: null },
            sm: { size: responsiveSizes.lg.sm, breakpoint: breakpoints.sm },
            md: { size: responsiveSizes.lg.md, breakpoint: breakpoints.md },
            lg: { size: responsiveSizes.lg.lg, breakpoint: breakpoints.lg },
            xl: { size: responsiveSizes.lg.xl, breakpoint: breakpoints.xl }
          },
          xl: {
            xs: { size: responsiveSizes.xl.xs, breakpoint: null },
            sm: { size: responsiveSizes.xl.sm, breakpoint: breakpoints.sm },
            md: { size: responsiveSizes.xl.md, breakpoint: breakpoints.md },
            lg: { size: responsiveSizes.xl.lg, breakpoint: breakpoints.lg },
            xl: { size: responsiveSizes.xl.xl, breakpoint: breakpoints.xl }
          }
        }
      );
    });

    it('should convert undefined & undefined into undefined', () => {
      expect(extractStyleSheetData(undefined, undefined)).toEqual(undefined);
    });

    it('should convert null & null into undefined', () => {
      expect(extractStyleSheetData(null, null)).toEqual(undefined);
    });

    it('should convert null & undefined into undefined', () => {
      expect(extractStyleSheetData(null, undefined)).toEqual(undefined);
    });

    it('should convert undefined & null into undefined', () => {
      expect(extractStyleSheetData(undefined, null)).toEqual(undefined);
    });
  });

  describe('createCss', () => {
    let data: NgxCutStyles;

    beforeEach(() => {
      const responsiveSizes: NgxCutResponsiveSizes = DEFAULT_RESPONSIVE_SIZES;
      const breakpoints: NgxCutBreakpoints = DEFAULT_BREAKPOINTS;
      data = extractStyleSheetData(breakpoints, responsiveSizes);
    });

    it('should return xs stylesheet', () => {
      expect(createCss('xs', data.xs)).toContain('.ngx-cut-xs');
    });

    it('should return sm stylesheet', () => {
      expect(createCss('sm', data.sm)).toContain('.ngx-cut-sm');
    });

    it('should return md stylesheet', () => {
      expect(createCss('md', data.md)).toContain('.ngx-cut-md');
    });

    it('should return lg stylesheet', () => {
      expect(createCss('lg', data.lg)).toContain('.ngx-cut-lg');
    });

    it('should return xl stylesheet', () => {
      expect(createCss('xl', data.xl)).toContain('.ngx-cut-xl');
    });
  });
});
