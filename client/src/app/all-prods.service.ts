import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllProdsService {

  constructor(private http: HttpClient) { }

  getAllProds() {
    this.http.get('/allProds').subscribe((res) => {
      console.log(res)
    })

  }
}
