import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '@app/shared/interfaces/books.interfaces';
import { BookService } from '@app/shared/services/book.service';
import { Observable, take } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.scss']
})
export class BooksDetailsComponent implements OnInit {
  book$!: Observable<Book>;

  constructor(private route:ActivatedRoute,private bookSvr:BookService,private location:Location) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params)=>{
      const primary_isbn10 = params['primary_isbn10'];
      this.book$ = this.bookSvr.getDetails(primary_isbn10);
    }); 
  }
  
  onGoBack():void{
    this.location.back();
  }
}
