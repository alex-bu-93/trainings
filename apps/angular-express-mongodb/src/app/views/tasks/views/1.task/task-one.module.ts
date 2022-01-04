import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { NzCardModule }     from 'ng-zorro-antd/card';
import { TaskOneComponent } from './task-one.component';

const ANT_DESIGN_MODULES = [
  NzCardModule
];

@NgModule({
  imports: [
    CommonModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [TaskOneComponent]
})
export class TaskOneModule {
}
