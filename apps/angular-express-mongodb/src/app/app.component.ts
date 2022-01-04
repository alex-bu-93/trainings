import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'aem-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
}
