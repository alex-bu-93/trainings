import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskOneComponent }     from './views/1.task';
import { TaskTwoComponent }     from './views/2.task';
import { TaskThreeComponent }   from './views/3.task';

const routes: Routes = [
  {path: '', redirectTo: 'task-one', pathMatch: 'full'},
  {path: 'task-one', component: TaskOneComponent},
  {path: 'task-two', component: TaskTwoComponent},
  {path: 'task-three', component: TaskThreeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class TasksModule {
}
