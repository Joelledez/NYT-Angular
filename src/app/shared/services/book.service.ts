import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  searchBooks(query='', page=1){}
  getDetails(id:number){}

}
