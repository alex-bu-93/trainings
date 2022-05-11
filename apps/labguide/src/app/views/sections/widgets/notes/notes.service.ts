import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note }       from './notes.interface';
import { Section }    from '../../sections.interface';

@Injectable({providedIn: 'root'})
export class NotesService {

  constructor(
    private http: HttpClient
  ) {
  }

  getNotes$(section: Section) {
    return this.http.get<Note[]>('notes', {params: {sectionId: section._id}});
  }

  postNote$(body: Note, section: Section) {
    return this.http.post('notes', {...body, sectionId: section._id});
  }

  deleteNote$(body: Note) {
    return this.http.delete('notes', {body});
  }
}
