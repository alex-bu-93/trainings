import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'labguide-layout',
  templateUrl: './labguide-layout.component.html'
})
export class LabguideLayoutComponent {
}
