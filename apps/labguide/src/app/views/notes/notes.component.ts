import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators }                    from '@angular/forms';
import { NzButtonComponent }                                     from 'ng-zorro-antd/button';
import { finalize, tap }                                         from 'rxjs';
import { NotesService }                                          from './notes.service';
import { Note }                                                  from './notes.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'labguide-notes',
  templateUrl: './notes.component.html'
})
export class NotesComponent {

  isNotesLoading: boolean;
  notes$ = this.getNotes$();

  noteFg = new FormGroup({
    text: new FormControl(null, Validators.required)
  });

  constructor(
    private cdr: ChangeDetectorRef,
    private notesService: NotesService
  ) {
  }

  getNotes$() {
    this.isNotesLoading = true;
    return this.notesService.getNotes$().pipe(
      finalize(() => {
        this.isNotesLoading = false;
        this.cdr.markForCheck();
      })
    );
  }

  onPostNote(btn: NzButtonComponent) {
    if (this.noteFg.valid) {
      btn['isLoading'] = true;
      btn['request$'] = this.notesService.postNote$(this.noteFg.value).pipe(
        tap(() => {
          this.notes$ = this.getNotes$();
          this.noteFg.reset();
          document.getElementById('postNoteTxtArea')?.focus();
        }),
        finalize(() => {
          btn['request$'] = null;
          btn['isLoading'] = false;
          this.cdr.markForCheck();
        })
      );
    } else this.noteFg.markAllAsTouched();
  }

  onDeleteNote(btn: NzButtonComponent, note: Note) {
    btn['isLoading'] = true;
    btn['request$'] = this.notesService.deleteNote$(note).pipe(
      tap(() => this.notes$ = this.getNotes$()),
      finalize(() => {
        btn['request$'] = null;
        btn['isLoading'] = false;
        this.cdr.markForCheck();
      })
    );
  }
}
