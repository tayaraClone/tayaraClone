import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  openedAcc: boolean = false;
  constructor(private http: HttpClient) { }
  signUp(credentials) {

    this.http.post('http://localhost:5000/signup', credentials)
      .toPromise()
      .then((res: any) => {
        let { token } = res.data.results;

        localStorage.setItem('______TO______KEN_______', token)
        this.openedAcc = true;
      })
      .catch((err: any) => console.log(err));
  }
}
