import { Injectable } from '@angular/core';
import { of }         from 'rxjs';

@Injectable({providedIn: 'root'})
export class ParentService {

  getRequest$() {
    return of(5);
  }

}
