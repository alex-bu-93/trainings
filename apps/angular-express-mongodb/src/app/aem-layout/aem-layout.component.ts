import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'aem-layout',
  templateUrl: './aem-layout.component.html',
  styleUrls: [`./aem-layout.component.scss`]
})
export class AemLayoutComponent {
}
