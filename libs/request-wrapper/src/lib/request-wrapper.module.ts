import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { NzSpinModule }            from 'ng-zorro-antd/spin';
import { NzResultModule }          from 'ng-zorro-antd/result';
import { NzButtonModule }          from 'ng-zorro-antd/button';
import { WithLoadingPipe }         from './with-loading.pipe';
import { RequestWrapperComponent } from './request-wrapper.component';

const ANT_DESIGN_MODULES = [
  NzResultModule,
  NzSpinModule,
  NzButtonModule
];

@NgModule({
  imports: [
    CommonModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [
    WithLoadingPipe,
    RequestWrapperComponent
  ],
  exports: [RequestWrapperComponent]
})
export class RequestWrapperModule {
}
