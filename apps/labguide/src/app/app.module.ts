import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent }   from './notes/notes.component';
import { AppComponent }     from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    NotesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
