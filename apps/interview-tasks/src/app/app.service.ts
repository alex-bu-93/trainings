import { Injectable }                                                                      from '@angular/core';
import { HttpClient, HttpErrorResponse }                                                   from '@angular/common/http';
import { BehaviorSubject, catchError, delay, filter, map, of, switchMap, tap, throwError } from 'rxjs';
import omit                                                                                from 'lodash-es/omit';

interface CacheItem {
  value?: unknown;
  isLoading?: boolean;
  timer?: number;
  error?: HttpErrorResponse;
}

interface Cache {
  [url: string]: CacheItem;
}

@Injectable({providedIn: 'root'})
export class AppService {

  cacheMap$ = new BehaviorSubject<Cache>({});

  constructor(
    private http: HttpClient
  ) {
  }

  getRandomNumbers() {
    return this.http.get<number[]>('http://www.randomnumberapi.com/api/v1.0/random');
  }

  private clearCacheItem(key: string) {
    const cacheMapValue = this.cacheMap$.getValue();
    clearTimeout(cacheMapValue[key]?.timer);
    this.cacheMap$.next(omit(cacheMapValue, key));
  }

  private setCacheItem(key: string, item: CacheItem) {
    const cacheMapValue = this.cacheMap$.getValue();
    clearTimeout(cacheMapValue[key]?.timer);
    this.cacheMap$.next({...cacheMapValue, [key]: {...item, timer: +setTimeout(() => this.clearCacheItem(key), 3000)}});
  }

  getCachedRandomNumbers() {
    const url = 'http://www.randomnumberapi.com/api/v1.0/random';
    const cacheItem = this.cacheMap$.getValue()[url];
    if (cacheItem) return cacheItem.value
      ? of(cacheItem.value).pipe(delay(0))
      : this.cacheMap$.asObservable().pipe(
        filter(cache => !cache[url].isLoading),
        map(cache => cache[url]),
        switchMap(cacheMap => cacheMap.error ? throwError(() => cacheMap.error) : of(cacheMap.value))
      );
    else {
      this.setCacheItem(url, {isLoading: true});
      return this.http.get(url).pipe(
        tap(value => this.setCacheItem(url, {isLoading: false, value})),
        catchError((error: HttpErrorResponse) => {
          this.setCacheItem(url, {isLoading: false, error});
          return throwError(() => error);
        })
      );
    }
  }
}
