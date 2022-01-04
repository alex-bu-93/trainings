import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'aem-task-two',
  templateUrl: './task-two.component.html'
})
export class TaskTwoComponent {
}
