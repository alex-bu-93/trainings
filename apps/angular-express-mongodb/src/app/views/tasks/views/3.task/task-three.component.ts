import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'trainings-task-three',
  templateUrl: './task-three.component.html'
})
export class TaskThreeComponent {
}
