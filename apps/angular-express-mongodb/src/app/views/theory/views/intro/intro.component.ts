import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'aem-intro',
  templateUrl: './intro.component.html'
})
export class IntroComponent {
}
