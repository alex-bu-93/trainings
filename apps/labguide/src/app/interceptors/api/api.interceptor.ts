import { Injectable }                                           from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable }                                           from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const url = `http://localhost:8080/${request.url}`;
    return next.handle(request.clone({url}));
  }

}
