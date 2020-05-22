import { NgModule } from '@angular/core';
import { NgxCutTruncateParagraphDirective } from './ngx-cut-truncate-paragraph.directive';
import { NgxCutTruncateTextDirective } from './ngx-cut-truncate-text.directive';

@NgModule({
  declarations: [NgxCutTruncateTextDirective, NgxCutTruncateParagraphDirective],
  imports: [],
  exports: [NgxCutTruncateTextDirective, NgxCutTruncateParagraphDirective]
})
export class NgxCutModule {}
