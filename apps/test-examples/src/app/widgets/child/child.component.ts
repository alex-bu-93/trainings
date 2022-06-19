import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, tap }                                                 from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'test-examples-child',
  templateUrl: './child.component.html'
})
export class ChildComponent {

  @Input() request$: Observable<unknown> | undefined;

  @Output() emittedEvent = new EventEmitter<number>();

  onSubscribe() {
    this.request$.pipe(tap(() => this.onTapEvent())).subscribe();
  }

  onTapEvent() {
    console.log('onTapEvent');
  }
}
