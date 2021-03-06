import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, } from '@angular/core';
import { HttpErrorResponse }                                                        from '@angular/common/http';
import { finalize, Observable, throwError }                                         from 'rxjs';
import { catchError, tap }                                                          from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'trainings-request-wrapper',
  templateUrl: './request-wrapper.component.html',
  styles: [`nz-spin { min-height: 100px }`]
})
export class RequestWrapperComponent<T> implements OnChanges {

  @Input() request$: Observable<T>;

  public data: T;

  isLoading: boolean;
  isFirstDataLoaded: boolean;

  error: string;

  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnChanges() {
    this.request$ = this.getUpdatedRequest(this.request$);
  }

  getUpdatedRequest(request$: Observable<T>): Observable<T> {
    this.error = null;
    this.isLoading = true;
    return request$?.pipe(
      tap(data => {
        this.data = data;
        this.isFirstDataLoaded = true;
      }),
      catchError((err: HttpErrorResponse) => {
        this.error = err.message;
        return throwError(() => err);
      }),
      finalize(() => {
        this.isLoading = false;
        this.cdr.markForCheck();
      })
    );
  }
}
