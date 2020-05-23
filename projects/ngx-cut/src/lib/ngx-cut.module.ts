import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { ngxCutOptionsFactory } from './ngx-cut-options-factory';
import { NgxCutOptionsService } from './ngx-cut-options.service';
import { NgxCutTruncateParagraphDirective } from './ngx-cut-truncate-paragraph.directive';
import { NgxCutTruncateTextDirective } from './ngx-cut-truncate-text.directive';
import { NgxCutService } from './ngx-cut.service';

export interface NgxCutOptions {
  lines?: number;
}

export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<NgxCutOptions>('forRoot() NgxCutOptionsService configuration.');

@NgModule({
  declarations: [NgxCutTruncateTextDirective, NgxCutTruncateParagraphDirective],
  imports: [],
  exports: [NgxCutTruncateTextDirective, NgxCutTruncateParagraphDirective],
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
