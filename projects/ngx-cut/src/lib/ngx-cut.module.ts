import { NgModule } from '@angular/core';
import { NgxCutTruncateParagraphDirective } from './ngx-cut-truncate-paragraph.directive';
import { NgxCutTruncateTextDirective } from './ngx-cut-truncate-text.directive';
import { NgxCutComponent } from './ngx-cut.component';

@NgModule({
  declarations: [NgxCutComponent, NgxCutTruncateTextDirective, NgxCutTruncateParagraphDirective],
  imports: [],
  exports: [NgxCutComponent, NgxCutTruncateTextDirective, NgxCutTruncateParagraphDirective]
})
export class NgxCutModule {}
