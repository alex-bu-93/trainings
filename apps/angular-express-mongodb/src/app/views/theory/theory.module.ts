import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent }       from './views/intro';

const routes: Routes = [
  {path: '', redirectTo: 'intro', pathMatch: 'full'},
  {path: 'intro', component: IntroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class TheoryModule {
}
