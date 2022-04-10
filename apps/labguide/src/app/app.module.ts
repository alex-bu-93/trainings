import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NotesModule }      from './notes';
import { AppComponent }     from './app.component';

const BROWSER_MODULES = [
  BrowserModule
]

@NgModule({
  imports: [
    NotesModule,
    HttpClientModule,
    BROWSER_MODULES
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
