import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { NgxCutStylesBreakpointData } from './ngx-cut-options.interface';
import { NgxCutOptionsService } from './ngx-cut-options.service';
import { extractStyleSheetData } from './ngx-cut.utils';

@Injectable()
export class NgxCutStyleService {
  constructor(@Inject(DOCUMENT) private document: any, private options: NgxCutOptionsService) {}

  private createCss(key: string, data: NgxCutStylesBreakpointData): string {
    const sheet: string[] = [];
    for (const [k, v] of Object.entries(data)) {
      if (v.breakpoint) {
        sheet.push(`
        @media screen and (min-width:${v.breakpoint}px) {
          .ngx-cut-${key} {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: ${v.size};
            -webkit-box-orient: vertical;
          }
        }`);
      } else {
        sheet.push(`
        .ngx-cut-${key} {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: ${v.size};
          -webkit-box-orient: vertical;
        }`);
      }
    }
    return sheet.join('\n');
  }

  public createStyleSheet(): void {
    const style = this.document.createElement('style');
    const data = extractStyleSheetData(this.options.breakpoints, this.options.responsiveSizes);
    style.appendChild(this.document.createTextNode(this.createCss('xs', data.xs)));
    style.appendChild(this.document.createTextNode(this.createCss('sm', data.sm)));
    style.appendChild(this.document.createTextNode(this.createCss('md', data.md)));
    style.appendChild(this.document.createTextNode(this.createCss('lg', data.lg)));
    style.appendChild(this.document.createTextNode(this.createCss('xl', data.xl)));
    this.document.head.appendChild(style);
  }
}
