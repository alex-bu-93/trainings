import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'labguide-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
}
