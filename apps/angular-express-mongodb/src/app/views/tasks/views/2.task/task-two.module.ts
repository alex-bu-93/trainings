import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { NzCardModule }     from 'ng-zorro-antd/card';
import { TaskTwoComponent } from './task-two.component';

const ANT_DESIGN_MODULES = [
  NzCardModule
];

@NgModule({
  imports: [
    CommonModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [TaskTwoComponent]
})
export class TaskTwoModule {
}
