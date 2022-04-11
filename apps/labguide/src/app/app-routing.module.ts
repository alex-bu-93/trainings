import { NgModule }                                      from '@angular/core';
import { RouterModule, Routes }                          from '@angular/router';
import { LabguideLayoutComponent, LabguideLayoutModule } from './labguide-layout';
import { NotesComponent, NotesModule }                   from './views/notes';

const PAGES_MODULES = [
  LabguideLayoutModule,
  NotesModule
];
const routes: Routes = [
  {
    path: '',
    component: LabguideLayoutComponent,
    children: [
      {path: '', component: NotesComponent}
    ]
  }
]

@NgModule({
  imports: [PAGES_MODULES, RouterModule.forRoot(routes)],
  exports: [PAGES_MODULES, RouterModule]
})
export class AppRoutingModule {
}
