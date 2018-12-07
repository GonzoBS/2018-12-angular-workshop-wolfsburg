import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';
import { of, from, Observable } from 'rxjs';
import { map, filter, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;
  book: Book;

  constructor(private route: ActivatedRoute, private service: BookStoreService) { }

  ngOnInit() {

    /*
    // Observer
    const observer = {
      next: n => console.log(n),
      error: e => console.log('ERROR', e),
      complete: () => console.log('COMPLETE')
    };

    // Observable
    const myObservable$ = new Observable<number>(obs => {

      obs.next(2);
      setTimeout(() => obs.next(5), 1000);
      setTimeout(() => obs.next(6), 1000);
      // setTimeout(() => obs.error(-1), 2000);
      setTimeout(() => obs.complete(), 2000);

    });

    // import { map } from 'rxjs/operators';
    // Subscription
    const subscription = myObservable$
      .pipe(
        map(number => number * 10),
        filter(number => number > 20),
        map(number => 'TEST ' + number)
      )
      .subscribe(observer);

    setTimeout(() => subscription.unsubscribe(), 3000);

    */

    /*
    this.route.paramMap
      .subscribe(paramMap => {

        this.isbn = paramMap.get('isbn');

        // the worst RxJS anti-pattern of all times!
        this.service.getSingle(this.isbn)
          .subscribe(book => this.book = book);
      });
    */

    this.route.paramMap.pipe(
      map(params => params.get('isbn')),
      mergeMap(isbn => this.service.getSingle(isbn))
    )
    .subscribe(book => this.book = book);
  }

}
