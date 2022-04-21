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

  notes$ = this.notesService.getNotes$();

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
      btn['request$'] = this.notesService.postNote$(this.noteFg.value).pipe(
        tap(() => {
          this.notes$ = this.notesService.getNotes$();
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
      tap(() => this.notes$ = this.notesService.getNotes$()),
      finalize(() => {
        btn['request$'] = null;
        btn['isLoading'] = false;
        this.cdr.markForCheck();
      })
    );
  }
}
