import { Component, HostListener, OnInit } from '@angular/core';
import { NgxCutEventTruncate } from 'projects/ngx-cut/src/lib';
import { VERSION } from '../environments/version';

const TEXT =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque porta. Vivamus ac leo pretium faucibus. Maecenas sollicitudin. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Morbi scelerisque luctus velit. Nam sed tellus id magna elementum tincidunt. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Integer lacinia. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci.' +
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque porta. Vivamus ac leo pretium faucibus. Maecenas sollicitudin. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Morbi scelerisque luctus velit. Nam sed tellus id magna elementum tincidunt. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Integer lacinia. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci.';

interface ExampleSectionItem {
  title: string;
  description: string;
  code: string;
}

interface ExampleSection {
  simple: ExampleSectionItem[];
  multiline: ExampleSectionItem[];
  disabled: ExampleSectionItem[];
  change: ExampleSectionItem[];
  responsive: ExampleSectionItem[];
}

interface ExampleCode {
  short: string;
  long: string;
  innerHtml: string;
  fromConfig: string;
  disabled: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'ngx-cut';
  public version = VERSION;

  public text = TEXT;
  public truncateEvent: NgxCutEventTruncate;
  public windowSize: string;

  public section: ExampleSection = {
    simple: [
      {
        title: 'Without any params',
        code: '<p ngxCut>{{ text }}</p>',
        description: 'Default number of lines (1) are truncated.'
      },
      {
        title: 'As innerHTML',
        code: '<p ngxCut [innerHTML]="text"></p>',
        description: 'As alternative you can use innerHTML.'
      }
    ],
    multiline: [
      {
        title: 'Multiple lines can be truncated',
        code: '<p ngxCut [size]="2">{{ text }}</p>',
        description: '2 lines are truncated in all resolutions.'
      },
      {
        title: 'More lines can be truncated',
        code: '<p ngxCut [size]="4">{{ text }}</p>',
        description: '4 lines are truncated in all resolutions. Size does not have upper limit.'
      }
    ],
    disabled: [
      {
        title: 'Truncate can be disabled',
        code: '<p ngxCut [size]="4" [truncateDisabled]="true">{{ text }}</p>',
        description: 'No lines are truncated because of truncateDisabled.'
      }
    ],
    change: [
      {
        title: 'Truncate can change event can be used',
        code:
          '<p ngxCut [size]="2" (truncateChange)="truncateEvent = $event">{{ text }}</p>\n<pre>{{ truncateEvent | json }}</pre>',
        description: 'When text is truncated event is emmited.'
      }
    ],
    responsive: [
      {
        title: 'Responsive extra small size',
        code: '<p ngxCut size="xs">{{ text }}</p>',
        description:
          'Each breakpoint truncate different number of lines based on forRoot options. Breakpoints are: sm = 300px, md = 400px, lg = 500px, xl = 600px. Numbers of truncated lines for each breakpoints are: xs = 1, sm = 2, md = 3, lg = 4, xl = 5.'
      },
      {
        title: 'Responsive small size',
        code: '<p ngxCut size="sm">{{ text }}</p>',
        description:
          'Each breakpoint truncate different number of lines based on forRoot options. Breakpoints are: sm = 300px, md = 400px, lg = 500px, xl = 600px. Numbers of truncated lines for each breakpoints are: xs = 2, sm = 3, md = 4, lg = 5, xl = 6.'
      },
      {
        title: 'Responsive medium size',
        code: '<p ngxCut size="md">{{ text }}</p>',
        description:
          'Each breakpoint truncate different number of lines based on forRoot options. Breakpoints are: sm = 300px, md = 400px, lg = 500px, xl = 600px.  Numbers of truncated lines for each breakpoints are: xs = 3, sm = 4, sm = 5, lg = 6, xl = 7.'
      },
      {
        title: 'Responsive large size',
        code: '<p ngxCut size="lg">{{ text }}</p>',
        description:
          'Each breakpoint truncate different number of lines based on forRoot options. Breakpoints are: sm = 300px, md = 400px, lg = 500px, xl = 600px. Numbers of truncated lines for each breakpoints are: xs = 4, sm = 5, md = 6, lg = 7, xl = 8.'
      },
      {
        title: 'Responsive extra large size',
        code: '<p ngxCut size="xl">{{ text }}</p>',
        description:
          'Each breakpoint truncate different number of lines based on forRoot options. Breakpoints are: sm = 300px, md = 400px, lg = 500px, xl = 600px. Numbers of truncated lines for each breakpoints are: xs = 5, sm = 6, md = 7, lg = 8, xl = 9.'
      }
    ]
  };

  @HostListener('window:resize', ['$event.target'])
  public onResize(window: Window): void {
    const { innerWidth } = window;
    this.windowSize = `Window size is <strong>${innerWidth}px</strong>. Activated breakpoint is <strong>${this.activatedBreakpoint(
      innerWidth
    )}</strong>.`;
  }

  public ngOnInit(): void {
    this.windowSize = `Window size is <strong>${
      window.innerWidth
    }px</strong>. Activated breakpoint is <strong>${this.activatedBreakpoint(innerWidth)}</strong>.`;
  }

  private activatedBreakpoint(windowWidth: number): 'xs' | 'sm' | 'md' | 'lg' | 'xl' {
    if (windowWidth < 300) {
      return 'xs';
    } else if (windowWidth < 400) {
      return 'sm';
    } else if (windowWidth < 500) {
      return 'md';
    } else if (windowWidth < 600) {
      return 'lg';
    } else {
      return 'xl';
    }
  }
}
