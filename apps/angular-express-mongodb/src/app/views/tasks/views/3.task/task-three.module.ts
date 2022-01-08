import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { NzTimelineModule }   from 'ng-zorro-antd/timeline';
import { TaskThreeComponent } from './task-three.component';

const ANT_DESIGN_MODULES = [
  NzTimelineModule
];

@NgModule({
  imports: [
    CommonModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [TaskThreeComponent]
})
export class TaskThreeModule {
}
