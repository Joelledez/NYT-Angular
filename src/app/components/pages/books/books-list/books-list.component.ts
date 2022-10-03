import { Component, OnInit } from '@angular/core';
import { Book } from '@app/shared/interfaces/books.interfaces';
import { BookService } from '@app/shared/services/book.service';
import { take } from "rxjs/operators";
type RequestInfo={
  next:string,
};

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books: Book[]=[];

  info: RequestInfo={
    next: "",
  }

  constructor(private bookSvc: BookService) { }
  ngOnInit(): void {
    this.getDataFromService();
  }

  private getDataFromService():void{
    this.bookSvc.searchBooks()
    .pipe(
      take(1)
    ).subscribe((res:any)=>{
      const {results}=res;
      this.books = [... this.books,... results.books,]
    })

  }
}
