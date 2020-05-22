import { Directive, ElementRef, OnInit, Renderer2, RendererStyleFlags2 } from '@angular/core';

@Directive({
  selector: '[ngxCutTruncateText]'
})
export class NgxCutTruncateTextDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  public ngOnInit(): void {
    const element = this.element.nativeElement;
    this.renderer.setStyle(element, 'overflow', 'hidden', RendererStyleFlags2.Important);
    this.renderer.setStyle(element, 'text-overflow', 'ellipsis', RendererStyleFlags2.Important);
    this.renderer.setStyle(element, 'white-space', 'nowrap', RendererStyleFlags2.Important);
  }
}
