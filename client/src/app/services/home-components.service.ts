import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeComponentsService {
  "men's fashion": boolean = true;
  "women's fashion": boolean = true;
  "boy's fashion": boolean = true;
  "baby's essentials": boolean = true;
  "video games": boolean = true;
  "other": boolean = true;
  min: number = 0;
  max: number = 9999999999;
  constructor() { }
}
