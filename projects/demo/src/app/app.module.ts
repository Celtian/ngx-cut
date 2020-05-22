import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCutModule } from 'projects/ngx-cut/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxCutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
