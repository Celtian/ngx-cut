import { Directive, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { NgxCutEventTruncate, NgxCutSizes, NgxCutSizesOnlyResponsive } from './ngx-cut-options.interface';
import { NgxCutOptionsService } from './ngx-cut-options.service';
import { NgxCutService } from './ngx-cut.service';
import { coerceNgxCutSizes } from './ngx-cut.utils';

/**
 * @returns multiline truncate
 */
@Directive({ selector: '[ngxCut]' })
export class NgxCutDirective implements OnInit {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('size') public set setLines(value: NgxCutSizes) {
    const v = coerceNgxCutSizes(value);
    this.size = v ? v : this.options.size;
    this.truncate();
    this.detectChanges();
  }
  public size: NgxCutSizes = this.options.size;

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('truncateDisabled') public set setTruncate(value: boolean) {
    this.truncateDisabled = value;
    this.truncate();
    this.detectChanges();
  }
  public truncateDisabled = false;

  @Output() public truncateChange = new EventEmitter<NgxCutEventTruncate>();

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
      if (this.size) {
        if (typeof this.size === 'number') {
          this.service.setStyle(this.element, this.renderer, this.truncateDisabled ? 0 : Number(this.size));
        } else {
          this.service.setClass(
            this.element,
            this.renderer,
            this.truncateDisabled ? undefined : (this.size as NgxCutSizesOnlyResponsive)
          );
        }
      }
    }
  }

  private detectChanges(): void {
    setTimeout(() => {
      if (this.element) {
        const { offsetHeight, scrollHeight } = this.element.nativeElement;
        this.truncateChange.emit({
          truncated: offsetHeight < scrollHeight,
          size: this.size,
          truncateDisabled: this.truncateDisabled,
          offsetHeight,
          scrollHeight
        });
      }
    }, 100);
  }
}
