import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Product } from '../classes/product';
import { Router } from '@angular/router';
import { SearchProd } from '../classes/search-prod';
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
    return this.http.get<Product[]>('http://localhost:5000/sellerProds', { // retreive seller products 
      headers: {
        'auth-token': localStorage.getItem("______TO______KEN_______") // set token header
      }
    })
      .pipe(
        tap(prods => { }),
        catchError(this.handleError('Seller Prods Error', [])) // handle error in case there is one
      )
  }

  finishedProducts(id) { // make request to change product by id to finished stock
    this.http.put('http://localhost:5000/finishedStock/' + id, { stockCondition: 'finished' },
      {
        headers: {
          'auth-token': localStorage.getItem('______TO______KEN_______') // set token ad a header
        }
      })
      .toPromise()
      .then((res: any) => { })
      .catch((err: any) => console.log(err)) // console error if there is one
  }

  getProdProfile(id) { // retreive product profile (product and it's seller data)
    return this.http.get<SearchProd>('http://localhost:5000/productProfile/' + id)
      .pipe(tap(prodProfile => { }),
        catchError(this.handleError('Product Search Error', []))
      )
  }

  getProdByName(name) {
    return this.http.get<Product[]>(`http://localhost:5000/getProductsByName/${name}`)
      .pipe(
        tap(prods => { }),
        catchError(this.handleError('Get Products By Name Error', []))
      )
  }
}
