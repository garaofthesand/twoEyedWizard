import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, shareReplay, catchError } from 'rxjs/operators';

export interface ContentRoot { [key: string]: any }

@Injectable({ providedIn: 'root' })
export class ContentService {
  private url = '/assets/content.json';
  private content$: Observable<ContentRoot> | null = null;

  constructor(private http: HttpClient) {}

  load() {
    if (!this.content$) {
      this.content$ = this.http.get<ContentRoot>(this.url).pipe(
        catchError(() => of({})),
        shareReplay(1)
      );
    }
    return this.content$;
  }

  // helper to get nested values by path
  get<T = any>(path: string, fallback?: T): Observable<T | undefined> {
    return this.load().pipe(
      map((c) => {
        const parts = path.split('.');
        let cur: any = c;
        for (const p of parts) {
          if (cur && p in cur) cur = cur[p];
          else return fallback;
        }
        return cur as T;
      })
    );
  }
}
