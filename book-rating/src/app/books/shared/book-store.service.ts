import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';

import { retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {

    return this.http
      .get<Book[]>('https://api.angular.schule/books')
      .pipe(
        retry(3)
      );
  }

}
