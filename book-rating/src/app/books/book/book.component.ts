import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input()
  book: Book;

  @Output()
  rated = new EventEmitter<Book>();

  constructor(private service: BookRatingService) { }

  rateDown() {
    const ratedBook = this.service.rateDown(this.book);
    this.rated.emit(ratedBook);
  }

  rateUp() {
    const ratedBook = this.service.rateUp(this.book);
    this.rated.emit(ratedBook);
  }
}
