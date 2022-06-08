import { NgModule }        from '@angular/core';
import { CommonModule }    from '@angular/common';
import { ParentComponent } from './parent.component';
import { ChildModule }     from '../../widgets/child/child.module';

@NgModule({
  imports: [
    CommonModule,
    ChildModule
  ],
  declarations: [ParentComponent]
})
export class ParentModule {
}
