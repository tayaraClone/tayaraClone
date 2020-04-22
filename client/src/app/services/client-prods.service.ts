import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Product } from './../classes/product';
@Injectable({
  providedIn: 'root'
})
export class ClientProdsService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) { // handle error in case there is one
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    }
  }

  getAllProds(): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:5000/allProd`) // retreive all products
      .pipe(
        tap(products => console.log('prods =>', products)),
        catchError(this.handleError('AllProds', []))
      );
  }
}
