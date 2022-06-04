import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NzButtonModule }   from 'ng-zorro-antd/button';
import { NzIconModule }     from 'ng-zorro-antd/icon';
import { AppComponent }     from './app.component';

const ANT_DESIGN_MODULES = [
  NzButtonModule,
  NzIconModule
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}
