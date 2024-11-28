import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { ngxCutOptionsFactory } from './ngx-cut-options-factory';
import { NgxCutOptions } from './ngx-cut-options.interface';
import { NgxCutOptionsService } from './ngx-cut-options.service';
import { NgxCutDirective } from './ngx-cut.directive';
import { NgxCutService } from './ngx-cut.service';

export const FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<NgxCutOptions>(
  'forRoot() NgxCutOptionsService configuration.'
);

@NgModule({
  declarations: [NgxCutDirective],
  exports: [NgxCutDirective],
  providers: [NgxCutService, NgxCutOptionsService]
})
export class NgxCutModule {
  public static forRoot(options?: NgxCutOptions): ModuleWithProviders<NgxCutModule> {
    return {
      ngModule: NgxCutModule,
      providers: [
        {
          provide: FOR_ROOT_OPTIONS_TOKEN,
          useValue: options
        },
        {
          provide: NgxCutOptionsService,
          useFactory: ngxCutOptionsFactory,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    };
  }
}
