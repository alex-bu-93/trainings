import { NgModule }                    from '@angular/core';
import { RouterModule, Routes }        from '@angular/router';
import { TestExamplesLayoutComponent } from './test-examples-layout';
import { ParentComponent }             from './views/parent';

const routes: Routes = [
  {
    path: '',
    component: TestExamplesLayoutComponent,
    children: [
      {path: '', component: ParentComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
