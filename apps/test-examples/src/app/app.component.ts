import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'test-examples-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
}
