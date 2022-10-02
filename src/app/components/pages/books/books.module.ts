import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { BooksDetailsComponent } from '@books/books-details/books-details.component';
import { BooksListComponent } from '@books/books-list/books-list.component';



@NgModule({
  declarations: [
    BooksDetailsComponent,
    BooksListComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[
    BooksDetailsComponent,
    BooksListComponent
  ],
})
export class BooksModule { }
