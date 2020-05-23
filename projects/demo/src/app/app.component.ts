import { Component } from '@angular/core';
import { VERSION } from '../environments/version';

enum ExampleText {
  Short = 'Short text',
  Long = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque porta. Vivamus ac leo pretium faucibus. Maecenas sollicitudin. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Morbi scelerisque luctus velit. Nam sed tellus id magna elementum tincidunt. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Integer lacinia. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci.'
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
export class AppComponent {
  public title = 'ngx-cut';
  public version = VERSION;

  public textLong = ExampleText.Long;
  public textShort = ExampleText.Short;

  public ngxCutTruncateTextDirective = '<p ngxCutTruncateText>{{ text }}</p>';
  public ngxCutTruncateParagraphDirective: ExampleCode = {
    short: '<p ngxCutTruncateParagraph [lines]="2" (truncated)="onTruncated($event)">{{ textShort }}</p>',
    long: '<p ngxCutTruncateParagraph [lines]="2" (truncated)="onTruncated($event)">{{ textLong }}</p>',
    innerHtml: '<p ngxCutTruncateParagraph [lines]="2" [innerHTML]="sanitizedTextLong"></p>',
    fromConfig: '<p ngxCutTruncateParagraph [innerHTML]="sanitizedTextLong"></p>',
    disabled: '<p ngxCutTruncateParagraph [innerHTML]="textLong" [truncateDisabled]="true"></p>'
  };

  public onTruncated(event: boolean): void {
    console.log(event ? 'Truncated' : 'Not truncated');
  }
}
