import { ElementRef, Injectable, Renderer2, RendererStyleFlags2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxCutService {
  public setStyle(element: ElementRef, renderer: Renderer2, lines: number): void {
    const el = element.nativeElement;
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
}
