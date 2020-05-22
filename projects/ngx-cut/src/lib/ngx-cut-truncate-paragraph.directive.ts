import { Directive, ElementRef, Input, OnChanges, Renderer2, RendererStyleFlags2 } from '@angular/core';
import { coerceIntProperty } from './ngx-cut.utils';

const TRUNCATE_PARAGRAPH_DEFAULT_LINES = 1;

@Directive({
  selector: '[ngxCutTruncateParagraph]'
})
export class NgxCutTruncateParagraphDirective implements OnChanges {
  @Input('lines') public set setLines(value: number) {
    const v = coerceIntProperty(value);
    if (v > 0) {
      this.lines = v;
    } else {
      console.error('Invalid input. "Lines" must be integer higher than zero. Default value will be set');
      this.lines = TRUNCATE_PARAGRAPH_DEFAULT_LINES;
    }
  }
  public lines = TRUNCATE_PARAGRAPH_DEFAULT_LINES;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  public ngOnChanges(): void {
    const element = this.element.nativeElement;
    if (this.lines < 1) {
      this.renderer.setStyle(element, 'overflow', 'hidden', RendererStyleFlags2.Important);
      this.renderer.setStyle(element, 'text-overflow', 'ellipsis', RendererStyleFlags2.Important);
      this.renderer.setStyle(element, 'white-space', 'nowrap', RendererStyleFlags2.Important);
    } else {
      this.renderer.setStyle(element, 'overflow', 'hidden', RendererStyleFlags2.Important);
      this.renderer.setStyle(element, 'display', '-webkit-box', RendererStyleFlags2.Important);
      this.renderer.setStyle(element, '-webkit-line-clamp', this.lines, RendererStyleFlags2.Important);
      this.renderer.setStyle(element, '-webkit-box-orient', 'vertical', RendererStyleFlags2.Important);
    }
  }
}
