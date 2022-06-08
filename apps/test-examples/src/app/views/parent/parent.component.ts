import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ParentService }                      from './parent.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'test-examples-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent {

  request$ = this.parentService.getRequest$();

  emittedEvent: number;

  constructor(
    private parentService: ParentService
  ) {
  }

  setEmittedEvent(value: number) {
    this.emittedEvent = value;
  }
}

