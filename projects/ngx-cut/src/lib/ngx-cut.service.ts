import { ElementRef, Injectable, Renderer2, RendererStyleFlags2 } from '@angular/core';
import { NgxCutSizesOnlyResponsive } from './ngx-cut-options.interface';
import { NgxCutStyleService } from './ngx-cut-style.service';

@Injectable()
export class NgxCutService {
  constructor(private styleService: NgxCutStyleService) {
    this.styleService.createStyleSheet();
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
}
