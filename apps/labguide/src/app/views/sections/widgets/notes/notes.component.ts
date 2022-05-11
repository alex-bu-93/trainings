import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators }                           from '@angular/forms';
import { NzButtonComponent }                                            from 'ng-zorro-antd/button';
import { finalize, Observable, tap }                                    from 'rxjs';
import { NotesService }                                                 from './notes.service';
import { Note }                                                         from './notes.interface';
import { Section }                                                      from '../../sections.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'labguide-notes',
  templateUrl: './notes.component.html',
  styles: [`nz-card { min-height: 52px }`]
})
export class NotesComponent {

  notes$: Observable<Note[]>;

  private _section: Section
  get section(): Section { return this._section; }
  @Input() set section(section: Section) {
    this._section = section;
    this.notes$ = this.notesService.getNotes$(section);
  };

  noteFg = new FormGroup({
    text: new FormControl(null, Validators.required)
  });

  constructor(
    private cdr: ChangeDetectorRef,
    private notesService: NotesService
  ) {
  }

  trackById = (i, note: Note) => note._id;

  onPostNote(btn: NzButtonComponent) {
    if (this.noteFg.valid) {
      btn['isLoading'] = true;
      btn['request$'] = this.notesService.postNote$(this.noteFg.value, this.section).pipe(
        tap(() => {
          this.notes$ = this.notesService.getNotes$(this.section);
          this.noteFg.reset();
          document.getElementById('postNoteTxtArea')?.focus();
        }),
        finalize(() => {
          btn['request$'] = null;
          btn['isLoading'] = false;
          this.cdr.markForCheck();
        })
      );
    } else {
      this.noteFg.markAllAsTouched();
      document.getElementById('postNoteTxtArea')?.focus();
    }
  }

  onDeleteNote(btn: NzButtonComponent, note: Note) {
    btn['isLoading'] = true;
    btn['request$'] = this.notesService.deleteNote$(note).pipe(
      tap(() => this.notes$ = this.notesService.getNotes$(this.section)),
      finalize(() => {
        btn['request$'] = null;
        btn['isLoading'] = false;
        this.cdr.markForCheck();
      })
    );
  }
}
