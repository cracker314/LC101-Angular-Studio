import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortfolioTableComponent } from './portfolio-table/portfolio-table.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
