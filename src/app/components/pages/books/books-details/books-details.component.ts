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
  books: Book[]=[];
  book$!: Book;
  constructor(private route:ActivatedRoute,private bookSvc:BookService,private location:Location) { }

  ngOnInit(): void {
    this.bookSvc.searchBooks()
    .pipe(
      take(1)
    ).subscribe((res:any)=>{
      const {results}=res;
      this.books = [... this.books,... results.books,]
      this.route.params.pipe(take(1)).subscribe((params)=>{
        const primary_isbn10 = params['book.primary_isbn10'];
        this.books.forEach(book => {
          if(book.primary_isbn10==primary_isbn10){
            this.book$=book
            console.log(book.primary_isbn10)
          }
        });
      });
    })    
  }
  onGoBack():void{
    this.location.back();
  }
}
