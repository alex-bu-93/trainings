import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators }                    from '@angular/forms';
import { NzButtonComponent }                                     from 'ng-zorro-antd/button';
import { finalize, tap }                                         from 'rxjs';
import { NotesService }                                          from './notes.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-notes',
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

  onPostNote(postNoteBtn: NzButtonComponent) {
    if (this.noteFg.valid) {
      postNoteBtn['isLoading'] = true;
      postNoteBtn['postNote$'] = this.notesService.postNote$(this.noteFg.value).pipe(
        tap(() => {
          this.notes$ = this.notesService.getNotes$();
          this.noteFg.reset();
        }),
        finalize(() => {
          postNoteBtn['postNote$'] = null;
          postNoteBtn['isLoading'] = false;
          this.cdr.markForCheck();
        })
      );
    } else this.noteFg.markAllAsTouched();
  }
}
