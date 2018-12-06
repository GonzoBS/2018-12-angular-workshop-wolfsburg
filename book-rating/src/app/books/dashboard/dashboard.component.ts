import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  constructor(private service: BookStoreService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(books => this.books = books);
  }

  sortAndUpdate(ratedBook: Book) {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating);
  }

  get amountOfBooks() {
    return this.books ? this.books.length : 0;
  }

  addBook(newBook: Book) {
    this.books = [...this.books, newBook];
  }
}
