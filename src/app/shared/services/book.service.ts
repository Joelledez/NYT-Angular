import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { environment } from '@environment/environment';
import { Book } from '../interfaces/books.interfaces';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  searchBooks(){
    return this.http.get<Book[]>(
      `${environment.baseUrlAPI}`
      );
  }
  getDetails(id:number){
    return this.http.get<Book[]>(
      `${environment.baseUrlAPI}/${id}`
      );
  }

}
