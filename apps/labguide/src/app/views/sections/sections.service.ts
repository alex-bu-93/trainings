import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Section }    from './sections.interface';

@Injectable({providedIn: 'root'})
export class SectionsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getSections$() {
    return this.http.get<Section[]>('sections');
  }

  postSection$(body: Partial<Section>) {
    return this.http.post<string>('sections', body);
  }

  deleteSection$(_id: string) {
    return this.http.delete('sections', {params: {_id}});
  }
}
