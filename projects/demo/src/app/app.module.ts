import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCutModule } from 'projects/ngx-cut/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxCutModule.forRoot({
      lines: 4
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
