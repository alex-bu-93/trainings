import { NgModule }                    from '@angular/core';
import { RouterModule }                from '@angular/router';
import { NzLayoutModule }              from 'ng-zorro-antd/layout';
import { TestExamplesLayoutComponent } from './test-examples-layout.component';

const ANT_DESIGN_MODULES = [
  NzLayoutModule
];

@NgModule({
  imports: [
    RouterModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [TestExamplesLayoutComponent]
})
export class TestExamplesLayoutModule {
}
