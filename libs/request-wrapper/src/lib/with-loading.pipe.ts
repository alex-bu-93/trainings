import { Pipe, PipeTransform }          from '@angular/core';
import { HttpErrorResponse }            from '@angular/common/http';
import { isObservable, Observable, of } from 'rxjs';
import { map, startWith, catchError }   from 'rxjs/operators';

type WithLoading = Observable<{
  isLoading: boolean,
  response?: any,
  err?: HttpErrorResponse
}> | null;

@Pipe({name: 'withLoading'})
export class WithLoadingPipe implements PipeTransform {
  transform(request$: Observable<any>): WithLoading {
    return request$ && isObservable(request$) ? request$.pipe(
      map(response => ({isLoading: false, response})),
      startWith({isLoading: true}),
      catchError((err: HttpErrorResponse) => of({isLoading: false, err}))
    ) : null;
  }
}
