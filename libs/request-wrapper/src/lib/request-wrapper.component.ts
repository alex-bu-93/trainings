import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Observable, throwError }                                                     from 'rxjs';
import { catchError, tap }                                                            from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'trainings-request-wrapper',
  templateUrl: './request-wrapper.component.html'
})
export class RequestWrapperComponent<T = any> implements OnChanges {

  @Input() request$: Observable<T> | undefined;
  @Output() response = new EventEmitter<T | null | undefined>();

  public data: T | null | undefined;

  ngOnChanges() {
    this.request$ = this.getUpdatedStream(this.request$);
  }

  getUpdatedStream(request$: Observable<T> | undefined): Observable<T> | undefined {
    return request$?.pipe(
      tap(data => { this.data = data; this.response.emit(this.data); }),
      catchError(res => { this.data = null; this.response.emit(this.data); return throwError(res); }));
  }
}
