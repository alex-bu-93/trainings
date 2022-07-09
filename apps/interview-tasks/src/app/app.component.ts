import { ChangeDetectionStrategy, ChangeDetectorRef, Component }                                 from '@angular/core';
import { NzButtonComponent }                                                                     from 'ng-zorro-antd/button';
import { concatMap, filter, finalize, interval, map, startWith, Subject, switchMap, tap, timer } from 'rxjs';
import { AppService }                                                                            from './app.service';

const DEFAULT_TIMER = 2_000;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'trainings-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  private readonly clicked$ = new Subject<boolean>();

  isBtnDisabled$ = this.clicked$.pipe(
    switchMap(() => timer(DEFAULT_TIMER).pipe(map(() => false), startWith(true)))
  );

  randomNumbersByInterval$ = interval(DEFAULT_TIMER).pipe(
    startWith(null),
    filter(() => !document.hidden),
    concatMap(() => this.service.getRandomNumbers())
  );

  constructor(
    private cdr: ChangeDetectorRef,
    private service: AppService
  ) {
  }

  getRandomNumbersRq$(btn: NzButtonComponent) {
    btn['isLoading'] = true;
    return this.service.getRandomNumbers().pipe(
      tap(() => this.clicked$.next(true)),
      finalize(() => { btn['isLoading'] = false; this.cdr.markForCheck(); })
    );
  }

  getCachedRandomNumbersRq$(btn: NzButtonComponent) {
    btn['isLoading'] = true;
    return this.service.getCachedRandomNumbers().pipe(
      tap(res => console.log(res)),
      finalize(() => { btn['isLoading'] = false; this.cdr.markForCheck(); })
    );
  }
}
