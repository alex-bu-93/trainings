import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { ReactiveFormsModule }  from '@angular/forms';
import { RequestWrapperModule } from '@trainings/request-wrapper';
import { NzTreeModule }         from 'ng-zorro-antd/tree';
import { NzIconModule }         from 'ng-zorro-antd/icon';
import { NzButtonModule }       from 'ng-zorro-antd/button';
import { NzModalModule }        from 'ng-zorro-antd/modal';
import { NzInputModule }        from 'ng-zorro-antd/input';
import { NotesModule }          from './widgets/notes';
import { SectionsComponent }    from './sections.component';

const ANT_DESIGN_MODULES = [
  NzTreeModule,
  NzIconModule,
  NzButtonModule,
  NzModalModule,
  NzInputModule
];

@NgModule({
  imports: [
    CommonModule,
    NotesModule,
    RequestWrapperModule,
    ReactiveFormsModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [SectionsComponent]
})
export class SectionsModule {
}
