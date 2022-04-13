import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { ReactiveFormsModule }  from '@angular/forms';
import { RequestWrapperModule } from '@trainings/request-wrapper';
import { NzButtonModule }       from 'ng-zorro-antd/button';
import { NzInputModule }        from 'ng-zorro-antd/input';
import { NzListModule }         from 'ng-zorro-antd/list';
import { NzIconModule }         from 'ng-zorro-antd/icon';
import { NotesComponent }       from './notes.component';
import { LetDirectiveModule }   from '../../directives/let';

const ANT_DESIGN_MODULES = [
  NzButtonModule,
  NzInputModule,
  NzListModule,
  NzIconModule
];

@NgModule({
  imports: [
    CommonModule,
    LetDirectiveModule,
    ReactiveFormsModule,
    RequestWrapperModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [NotesComponent],
  exports: [NotesComponent]
})
export class NotesModule {
}
