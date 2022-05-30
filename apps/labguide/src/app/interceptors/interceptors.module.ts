import { NgModule }                            from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptor }                      from './api';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true}
  ],
  exports: [HttpClientModule]
})
export class InterceptorsModule {
}
