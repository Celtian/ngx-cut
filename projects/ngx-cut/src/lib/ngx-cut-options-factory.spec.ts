import { TAILWIND_BREAKPOINTS } from '.';
import { ngxCutOptionsFactory } from './ngx-cut-options-factory';
import { NgxCutOptionsService } from './ngx-cut-options.service';
import { BOOTSTRAP_BREAKPOINTS, CDK_BREAKPOINTS, DEFAULT_RESPONSIVE_SIZES, FX_LAYOUT_BREAKPOINTS } from './ngx-cut.constants';

describe('NgxCutOptionsFactory', () => {
  it('should return instance of NgxCutOptionsService', () => {
    expect(ngxCutOptionsFactory()).toBeInstanceOf(NgxCutOptionsService);
  });

  it('should return default values if undefined', () => {
    const optionsService: NgxCutOptionsService = ngxCutOptionsFactory(undefined);
    expect(optionsService.size).toEqual(1);
    expect(optionsService.breakpoints).toEqual(BOOTSTRAP_BREAKPOINTS);
    expect(optionsService.responsiveSizes).toEqual(DEFAULT_RESPONSIVE_SIZES);
  });

  it('should return default values if null', () => {
    const optionsService: NgxCutOptionsService = ngxCutOptionsFactory(null);
    expect(optionsService.size).toEqual(1);
    expect(optionsService.breakpoints).toEqual(BOOTSTRAP_BREAKPOINTS);
    expect(optionsService.responsiveSizes).toEqual(DEFAULT_RESPONSIVE_SIZES);
  });

  it('should return size if set value', () => {
    expect(ngxCutOptionsFactory({ size: 2 }).size).toEqual(2);
    expect(ngxCutOptionsFactory({ size: 'xs' }).size).toEqual('xs');
    expect(ngxCutOptionsFactory({ size: 'sm' }).size).toEqual('sm');
    expect(ngxCutOptionsFactory({ size: 'md' }).size).toEqual('md');
    expect(ngxCutOptionsFactory({ size: 'lg' }).size).toEqual('lg');
    expect(ngxCutOptionsFactory({ size: 'xl' }).size).toEqual('xl');
  });

  it('should return responsiveSizes if set value', () => {
    const responsiveSizes = {
      xs: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
      sm: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
      md: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
      lg: { xs: 4, sm: 5, md: 6, lg: 7, xl: 8 },
      xl: { xs: 5, sm: 6, md: 7, lg: 8, xl: 9 }
    };
    expect(ngxCutOptionsFactory({ responsiveSizes }).responsiveSizes).toEqual(responsiveSizes);
  });

  it('should return breakpoints if set value', () => {
    expect(ngxCutOptionsFactory({ breakpoints: 'BOOTSTRAP' }).breakpoints).toEqual(BOOTSTRAP_BREAKPOINTS);
    expect(ngxCutOptionsFactory({ breakpoints: 'FX_LAYOUT' }).breakpoints).toEqual(FX_LAYOUT_BREAKPOINTS);
    expect(ngxCutOptionsFactory({ breakpoints: 'CDK' }).breakpoints).toEqual(CDK_BREAKPOINTS);
    expect(ngxCutOptionsFactory({ breakpoints: 'TAILWIND' }).breakpoints).toEqual(TAILWIND_BREAKPOINTS);
    const breakpoints = { sm: 300, md: 400, lg: 500, xl: 600 };
    expect(ngxCutOptionsFactory({ breakpoints }).breakpoints).toEqual(breakpoints);
  });
});
