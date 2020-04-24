import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  openedAcc: boolean = false;
  constructor() { }
}
