import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  openedAcc: boolean = false;
  constructor(private http: HttpClient) { }
  signUp(credentials) {

    return this.http.post('http://localhost:5000/signup', credentials)
      .toPromise()
      .then((res: any) => {
        console.log(res);
        localStorage.setItem('______TO______KEN_______', res);
        this.toggleOpendAcc();
        console.log(this.openedAcc);
      })
      .catch((err: any) => console.log(err));
  }

  toggleOpendAcc() {
    this.openedAcc = !this.openedAcc;
  }
}
