import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full',

  },
  { 
    path: 'home', 
    loadChildren: () => import('./components/pages/home/home.module').then((m) => m.HomeModule)
   }, 
  { path: 'books-list',
    loadChildren: () => import('./components/pages/books/books-list/books-list.module').then((m) => m.BooksListModule) 
  },
  { path: 'books-details/:book.primary_isbn10',
    loadChildren: () => import('./components/pages/books/books-details/books-details.module').then((m) => m.BooksDetailsModule),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
