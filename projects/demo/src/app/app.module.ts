import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCutModule } from 'projects/ngx-cut/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxCutModule.forRoot({
      size: 1,
      breakpoints: { sm: 300, md: 400, lg: 500, xl: 600 },
      responsiveSizes: {
        xs: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
        sm: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
        md: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
        lg: { xs: 4, sm: 5, md: 6, lg: 7, xl: 8 },
        xl: { xs: 5, sm: 6, md: 7, lg: 8, xl: 9 }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
