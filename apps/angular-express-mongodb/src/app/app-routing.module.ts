import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AemLayoutComponent }   from './aem-layout';

const routes: Routes = [
  {path: '', redirectTo: 'tasks', pathMatch: 'full'},
  {
    path: '', component: AemLayoutComponent, children: [
      {path: 'tasks', loadChildren: () => import('./views/tasks').then(m => m.TasksModule)},
      {path: 'theory', loadChildren: () => import('./views/theory').then(m => m.TheoryModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
