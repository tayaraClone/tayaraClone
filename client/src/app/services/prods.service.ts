import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Product } from '../classes/product';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProdsService {

  constructor(private http: HttpClient, private router: Router) { }

  private handleError<T>(operation: string, result?: T) { // handle error in case there is one
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    }
  }

  getAllProds(): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:5000/allProds`) // retreive all products
      .pipe(
        tap(products => { }),
        catchError(this.handleError('AllProds Error', []))
      );
  }

  newProduct(newProd) {
    return this.http.post('http://localhost:5000/makeProduct', newProd, // make post request to make new Product
      {
        headers: {
          'auth-token': localStorage.getItem("______TO______KEN_______") // add token as a header
        }
      })
      .toPromise()
      .then((res: any) => {
        this.router.navigate(["/myProducts"]); // if every thing went well navigate to myProducts route
      })
      .catch((error: any) => console.log(error)); // console error if there is one
  }

  sellerProds() {
    return this.http.get<Product[]>('http://localhost:5000/sellerProds', {
      headers: {
        'auth-token': localStorage.getItem("______TO______KEN_______")
      }
    })
      .pipe(
        tap(prods => { }),
        catchError(this.handleError('Seller Prods Error', []))
      )
  }

  finishedProducts(id, changeStock) {
    this.http.put('http://localhost:5000/finishedStock/' + id, { stockCondition: 'limited' },
      {
        headers: {
          'auth-token': localStorage.getItem('______TO______KEN_______')
        }
      })
      .toPromise()
      .then((res: any) => { changeStock() })
      .catch((err: any) => console.log(err))
  }
}
