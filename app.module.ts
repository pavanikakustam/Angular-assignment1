import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { IfComparisionComponent } from './if-comparision/if-comparision.component';
import { ForDirectiveComponent } from './for-directive/for-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    IfComparisionComponent,
    ForDirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
