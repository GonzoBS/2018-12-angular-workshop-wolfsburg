import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;

  constructor(private route: ActivatedRoute, private service: BookStoreService) { }

  ngOnInit() {
    console.log('ngOnInit!');
    this.isbn = this.route.snapshot.paramMap.get('isbn');
  }

}
