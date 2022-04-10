import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note }       from './notes.interface';

@Injectable({providedIn: 'root'})
export class NotesService {

  constructor(
    private http: HttpClient
  ) {
  }

  getNotes$() {
    return this.http.get<Note[]>('notes');
  }

  postNote$(note: Note) {
    return this.http.post('notes', note);
  }
}
