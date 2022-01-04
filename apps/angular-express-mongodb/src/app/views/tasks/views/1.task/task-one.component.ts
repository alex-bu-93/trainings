import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'aem-task-one',
  templateUrl: './task-one.component.html'
})
export class TaskOneComponent {
}
