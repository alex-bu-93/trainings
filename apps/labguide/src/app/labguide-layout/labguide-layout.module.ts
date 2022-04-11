import { NgModule }                from '@angular/core';
import { RouterModule }            from '@angular/router';
import { NzLayoutModule }          from 'ng-zorro-antd/layout';
import { LabguideLayoutComponent } from './labguide-layout.component';

const ANT_DESIGN_MODULES = [
  NzLayoutModule
];

@NgModule({
  imports: [
    RouterModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [LabguideLayoutComponent]
})
export class LabguideLayoutModule {
}
