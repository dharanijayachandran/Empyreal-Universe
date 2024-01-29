import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { GlobalModule } from "global";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  //  GlobalModule,
    AppRoutingModule,
   // NgbModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
