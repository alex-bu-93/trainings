import { NgModule }                  from '@angular/core';
import { CommonModule }              from '@angular/common';
import { FormsModule }               from '@angular/forms';
import { NzCodeEditorModule }        from 'ng-zorro-antd/code-editor';
import { NzSelectModule }            from 'ng-zorro-antd/select';
import { ResultCodeEditorComponent } from './result-code-editor.component';

const ANT_DESIGN_MODULES = [
  NzCodeEditorModule,
  NzSelectModule
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ANT_DESIGN_MODULES
  ],
  exports: [
    ResultCodeEditorComponent
  ],
  declarations: [ResultCodeEditorComponent]
})
export class ResultCodeEditorModule {
}
