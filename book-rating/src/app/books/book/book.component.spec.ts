import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { RepeatDirective } from '../shared/repeat.directive';
import { BookRatingService } from '../shared/book-rating.service';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  let rateUpWasCalled;
  const ratingMock = {
    rateUp: () => { rateUpWasCalled = true; }
  };

  beforeEach(async(() => {
    rateUpWasCalled = false;
    TestBed.configureTestingModule({
      declarations: [
        BookComponent,
        RepeatDirective
      ],
      providers: [
        {
          provide: BookRatingService,
          useValue: ratingMock
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    component.book = {
      isbn: '000',
      title: ':-)',
      description: 'schluss für heute',
      rating: 1
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should forward the rateUp call to the book rating service', () => {
    component.rateUp();
    expect(rateUpWasCalled).toBe(true);
  });
});
