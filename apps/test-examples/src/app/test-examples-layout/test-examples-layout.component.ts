import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'test-examples-layout',
  templateUrl: './test-examples-layout.component.html'
})
export class TestExamplesLayoutComponent {
}
