import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  openedAcc() {
    return !!localStorage.getItem('______TO______KEN_______');
  }
  constructor(private http: HttpClient,
    private router: Router) { }
  signUp(credentials) {

    return this.http.post('http://localhost:5000/signup', credentials) // send http post request to the server with credentials data
      .toPromise() // make promise
      .then((res: any) => { // run this function if the request went well
        localStorage.setItem('______TO______KEN_______', res);
        this.myProdsRedirect()
      })
      .catch((err: any) => console.log(err)); // console error if there is one
  }

  myProdsRedirect() {
    this.router.navigate(['/myProducts'])
  }

  logOut() {
    localStorage.removeItem('______TO______KEN_______')
    this.router.navigate(['/'])
  }
}
