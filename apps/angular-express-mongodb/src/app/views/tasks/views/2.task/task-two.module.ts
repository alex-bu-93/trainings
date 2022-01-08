import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { ResultCodeEditorModule } from '@widgets/result-code-editor';
import { CodeMarkdownPipeModule } from '@pipes/code-markdown';
import { NzTimelineModule }       from 'ng-zorro-antd/timeline';
import { TaskTwoComponent }       from './task-two.component';

const ANT_DESIGN_MODULES = [
  NzTimelineModule
];

@NgModule({
  imports: [
    CommonModule,
    CodeMarkdownPipeModule,
    ResultCodeEditorModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [TaskTwoComponent]
})
export class TaskTwoModule {
}
