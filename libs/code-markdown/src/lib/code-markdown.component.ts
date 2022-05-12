import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'trainings-code-markdown',
  template: `
    <p class="text-bold mb-1">{{label}}</p>
    <span *ngIf="code | codeMarkdown as codeMarkdown" [innerHTML]="codeMarkdown"></span>`
})
export class CodeMarkdownComponent {

  @Input() label = '';
  @Input() code = '';

}
