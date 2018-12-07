import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';

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

    this.route.paramMap
      .subscribe(paramMap => {

        this.isbn = paramMap.get('isbn');

        // the worst RxJS anti-pattern of all times!
        this.service.getSingle(this.isbn)
          .subscribe(book => this.book = book);
      });
  }

}
