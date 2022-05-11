import { NgModule }                                      from '@angular/core';
import { RouterModule, Routes }                          from '@angular/router';
import { SectionsComponent, SectionsModule }             from './views/sections';
import { LabguideLayoutComponent, LabguideLayoutModule } from './labguide-layout';

const PAGES_MODULES = [
  LabguideLayoutModule,
  SectionsModule
];
const routes: Routes = [
  {
    path: '',
    component: LabguideLayoutComponent,
    children: [{path: '', component: SectionsComponent}]
  }
]

@NgModule({
  imports: [PAGES_MODULES, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
