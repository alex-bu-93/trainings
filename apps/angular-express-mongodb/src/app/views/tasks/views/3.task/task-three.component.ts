import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'aem-task-three',
  templateUrl: './task-three.component.html'
})
export class TaskThreeComponent {
}
