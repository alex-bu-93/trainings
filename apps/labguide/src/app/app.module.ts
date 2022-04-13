import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorsModule }      from './interceptors';
import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';

const BROWSER_MODULES = [
  BrowserModule,
  BrowserAnimationsModule
];

@NgModule({
  imports: [
    AppRoutingModule,
    InterceptorsModule,
    BROWSER_MODULES
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
