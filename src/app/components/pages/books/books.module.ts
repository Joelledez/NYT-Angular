import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksDetailsComponent } from './books-details/books-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BooksDetailsComponent,
    BooksListComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BooksDetailsComponent,
    BooksListComponent,
  ]
})
export class BooksModule { }
