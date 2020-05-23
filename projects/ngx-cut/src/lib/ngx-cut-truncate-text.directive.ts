import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NgxCutService } from './ngx-cut.service';

@Directive({
  selector: '[ngxCutTruncateText]'
})
export class NgxCutTruncateTextDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2, private service: NgxCutService) {}

  public ngOnInit(): void {
    if (this.element) {
      this.service.setStyle(this.element, this.renderer, 1);
    }
  }
}
