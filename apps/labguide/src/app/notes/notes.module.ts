import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule }      from 'ng-zorro-antd/button';
import { NotesComponent }      from './notes.component';

const ANT_DESIGN_MODULES = [
  NzButtonModule
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [NotesComponent],
  exports: [NotesComponent]
})
export class NotesModule {
}
