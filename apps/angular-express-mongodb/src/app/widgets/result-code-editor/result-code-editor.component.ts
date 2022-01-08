import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { NzSelectOptionInterface }                                      from 'ng-zorro-antd/select';
import { ResultMode }                                                   from './result-code-editor.utils';

type Language = 'typescript' | 'html';
type CodeEditorMap = Record<ResultMode, { language: Language, model: string }>;

interface EditorOption {
  scrollBeyondLastLine: boolean;
  minimap: { enabled: boolean };
  language: Language;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'aem-result-code-editor',
  templateUrl: './result-code-editor.component.html'
})
export class ResultCodeEditorComponent {

  resultMode!: ResultMode;
  codeEditorOptions!: NzSelectOptionInterface[];
  private _codeEditorMap!: CodeEditorMap;
  @Input() set codeEditorMap(codeEditorMap: CodeEditorMap) {
    console.log(codeEditorMap);
    this._codeEditorMap = codeEditorMap;
    this.codeEditorOptions = Object.keys(codeEditorMap).map(x => ({label: x, value: x}));
    this.resultMode = this.codeEditorOptions[0]?.value;
    this.updateOptions();
  };
  get codeEditorMap() {
    return this._codeEditorMap;
  }

  isEditorRendered = true;
  editorOption!: EditorOption;

  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  updateOptions() {
    this.isEditorRendered = false;
    this.editorOption = {
      language: this.codeEditorMap[this.resultMode].language,
      scrollBeyondLastLine: false,
      minimap: {enabled: false}
    };
    setTimeout(() => {
      this.isEditorRendered = true;
      this.cdr.markForCheck();
    });
  }
}
