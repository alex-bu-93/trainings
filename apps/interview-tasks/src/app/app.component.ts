import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { concatMap, interval, map, startWith, Subject, switchMap, tap, timer } from 'rxjs';
import { AppService } from './app.service';

const DEFAULT_TIMER = 3000;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'trainings-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  private _clicked$ = new Subject<boolean>();
  private set clicked(value: boolean) { this._clicked$.next(value) }
  private get clicked$() { return this._clicked$.asObservable(); }

  public isBtnDisabled$ = this.clicked$.pipe(
    switchMap(() => timer(DEFAULT_TIMER).pipe(map(() => false), startWith(true)))
  );

  get randomNumbers$() { return this.service.getRandomNumbers(); }
  randomNumbersByInterval$ = interval(DEFAULT_TIMER).pipe(
    startWith(this.randomNumbers$),
    concatMap(() => this.randomNumbers$)
  );

  constructor(
    private cdr: ChangeDetectorRef,
    private service: AppService
  ) {
  }

  getRandomNumbersRq$(btn: NzButtonComponent) {
    btn['isLoading'] = true;
    return this.randomNumbers$.pipe(
      tap(() => this.clicked = true),
      tap(() => btn['isLoading'] = false)
    );
  }

  getCachedRandomNumbersRq$(btn: NzButtonComponent) {
    btn['isLoading'] = true;
    return this.service.getCachedRandomNumbers().pipe(
      tap(res => console.log(res)),
      tap(() => btn['isLoading'] = false)
    );
  }
}
