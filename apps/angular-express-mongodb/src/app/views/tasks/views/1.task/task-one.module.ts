import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { CodeMarkdownModule }     from '@trainings/code-markdown';
import { ResultCodeEditorModule } from '@trainings/result-code-editor';
import { NzTimelineModule }       from 'ng-zorro-antd/timeline';
import { TaskOneComponent }       from './task-one.component';

const ANT_DESIGN_MODULES = [
  NzTimelineModule
];

@NgModule({
  imports: [
    CommonModule,
    CodeMarkdownModule,
    ResultCodeEditorModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [TaskOneComponent]
})
export class TaskOneModule {
}
