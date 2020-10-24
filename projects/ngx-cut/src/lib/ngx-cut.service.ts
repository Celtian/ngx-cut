import { DOCUMENT } from '@angular/common';
import { ElementRef, Inject, Injectable, Renderer2, RendererStyleFlags2 } from '@angular/core';
import { NgxCutSizesOnlyResponsive } from './ngx-cut-options.interface';
import { NgxCutOptionsService } from './ngx-cut-options.service';
import { createCss, extractStyleSheetData } from './ngx-cut.utils';

@Injectable()
export class NgxCutService {
  constructor(@Inject(DOCUMENT) private document: any, private options: NgxCutOptionsService) {
    this.createStyleSheet();
  }

  public setStyle(element: ElementRef, renderer: Renderer2, lines: number): void {
    switch (lines) {
      case 0:
        this.resetStyle(element, renderer);
        break;
      case 1:
        this.setSingleLineStyle(element, renderer);
        break;
      default:
        this.setMultiLineStyle(element, renderer, lines);
        break;
    }
  }

  private setSingleLineStyle(element: ElementRef, renderer: Renderer2): void {
    const el = element.nativeElement;
    renderer.setStyle(el, 'overflow', 'hidden', RendererStyleFlags2.Important);
    renderer.setStyle(el, 'text-overflow', 'ellipsis', RendererStyleFlags2.Important);
    renderer.setStyle(el, 'white-space', 'nowrap', RendererStyleFlags2.Important);
  }

  private setMultiLineStyle(element: ElementRef, renderer: Renderer2, lines: number): void {
    const el = element.nativeElement;
    renderer.setStyle(el, 'overflow', 'hidden', RendererStyleFlags2.Important);
    renderer.setStyle(el, 'display', '-webkit-box', RendererStyleFlags2.Important);
    renderer.setStyle(el, '-webkit-line-clamp', lines, RendererStyleFlags2.Important);
    renderer.setStyle(el, '-webkit-box-orient', 'vertical', RendererStyleFlags2.Important);
  }

  public resetStyle(element: ElementRef, renderer: Renderer2): void {
    const el = element.nativeElement;
    renderer.removeStyle(el, 'overflow', RendererStyleFlags2.Important);
    renderer.removeStyle(el, 'text-overflow', RendererStyleFlags2.Important);
    renderer.removeStyle(el, 'white-space', RendererStyleFlags2.Important);
    renderer.removeStyle(el, 'display', RendererStyleFlags2.Important);
    renderer.removeStyle(el, '-webkit-line-clamp', RendererStyleFlags2.Important);
    renderer.removeStyle(el, '-webkit-box-orient', RendererStyleFlags2.Important);
  }

  public setClass(element: ElementRef, renderer: Renderer2, size?: NgxCutSizesOnlyResponsive): void {
    const el = element.nativeElement;
    if (size) {
      this.resetClass(element, renderer);
      renderer.addClass(el, `ngx-cut-${size}`);
    } else {
      this.resetClass(element, renderer);
    }
  }

  private resetClass(element: ElementRef, renderer: Renderer2): void {
    const el = element.nativeElement;
    renderer.removeClass(el, 'ngx-cut-xs');
    renderer.removeClass(el, 'ngx-cut-sm');
    renderer.removeClass(el, 'ngx-cut-md');
    renderer.removeClass(el, 'ngx-cut-lg');
    renderer.removeClass(el, 'ngx-cut-xl');
  }

  private createStyleSheet(): void {
    const style = this.document.createElement('style');
    const data = extractStyleSheetData(this.options.breakpoints, this.options.responsiveSizes);
    style.appendChild(this.document.createTextNode(createCss('xs', data.xs)));
    style.appendChild(this.document.createTextNode(createCss('sm', data.sm)));
    style.appendChild(this.document.createTextNode(createCss('md', data.md)));
    style.appendChild(this.document.createTextNode(createCss('lg', data.lg)));
    style.appendChild(this.document.createTextNode(createCss('xl', data.xl)));
    this.document.head.appendChild(style);
  }
}
