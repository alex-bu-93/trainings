import { NgModule }           from '@angular/core';
import { RouterModule }       from '@angular/router';
import { CommonModule }       from '@angular/common';
import { NzLayoutModule }     from 'ng-zorro-antd/layout';
import { NzMenuModule }       from 'ng-zorro-antd/menu';
import { NzDropDownModule }   from 'ng-zorro-antd/dropdown';
import { NzIconModule }       from 'ng-zorro-antd/icon';
import { NzCardModule }       from 'ng-zorro-antd/card';
import { AemLayoutComponent } from './aem-layout.component';

const ANT_DESIGN_MODULES = [
  NzLayoutModule,
  NzMenuModule,
  NzDropDownModule,
  NzIconModule,
  NzCardModule
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [AemLayoutComponent]
})
export class AemLayoutModule {
}
