import { Directive, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { NgxCutOptionsService } from './ngx-cut-options.service';
import { NgxCutService } from './ngx-cut.service';
import { coerceIntProperty } from './ngx-cut.utils';

@Directive({
  selector: '[ngxCutTruncateParagraph]'
})
export class NgxCutTruncateParagraphDirective implements OnInit {
  @Input('lines') public set setLines(value: number) {
    const v = coerceIntProperty(value);
    if (v > 0) {
      this.lines = v;
    } else {
      this.lines = this.options.lines;
    }
    this.truncate();
    this.detectChanges();
  }
  public lines = this.options.lines;

  @Input('truncateDisabled') public set setTruncate(value: boolean) {
    this.truncateDisabled = value;
    this.truncate();
    this.detectChanges();
  }
  public truncateDisabled = false;

  @Output() public truncated = new EventEmitter<boolean>();

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private options: NgxCutOptionsService,
    private service: NgxCutService
  ) {}

  public ngOnInit(): void {
    this.truncate();
    this.detectChanges();
  }

  private truncate(): void {
    if (this.element) {
      this.service.setStyle(this.element, this.renderer, this.truncateDisabled ? 0 : this.lines);
    }
  }

  private detectChanges(): void {
    setTimeout(() => {
      if (this.element) {
        const { offsetHeight, scrollHeight } = this.element.nativeElement;
        this.truncated.emit(offsetHeight < scrollHeight);
      }
    }, 100);
  }
}
