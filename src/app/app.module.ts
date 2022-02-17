import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpCustomInterceptors } from './app.interceptors';
import { SharedCustomModule } from './shared/sharedcustom.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    SharedCustomModule,
    HttpClientModule
  ],
  providers: [
    ...HttpCustomInterceptors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
