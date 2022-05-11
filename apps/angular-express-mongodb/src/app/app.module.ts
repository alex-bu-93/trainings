import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData }      from '@angular/common';
import { HttpClientModule }        from '@angular/common/http';
import en                          from '@angular/common/locales/en';
import { en_US, NZ_I18N }          from 'ng-zorro-antd/i18n';
import { NzMessageModule }         from 'ng-zorro-antd/message';
import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';

registerLocaleData(en);

const BROWSER_MODULES = [
  BrowserModule,
  BrowserAnimationsModule
];
const ANT_DESIGN_MODULES = [
  NzMessageModule
];

@NgModule({
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BROWSER_MODULES,
    ANT_DESIGN_MODULES,
  ],
  providers: [
    {provide: NZ_I18N, useValue: en_US}
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
