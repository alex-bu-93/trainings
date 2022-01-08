import { Component }  from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Note {
  text: string;
}

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  private notesUrl = 'http://localhost:8080/notes';  // URL to web api

  text: string;
  notes: Note[] = [
    {text: 'Note one'},
    {text: 'Note two'}
  ];

  constructor(
    private http: HttpClient
  ) {
    this.getNotes().then(notes => {
      this.notes = notes
      console.log(notes);
    });
  }

  getNotes(): Promise<Note[]> {
    return this.http.get<Note[]>(this.notesUrl).toPromise();
  }

  add() {
    const note = {text: this.text};
    this.notes.push(note);
    this.text = '';
  }

  remove(idx: number) {
    this.notes.splice(idx, 1);
  }
}
