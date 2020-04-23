import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeComponentsService {
  mensFashion: boolean = true;
  womensFashion: boolean = true;
  boysFashion: boolean = true;
  babysEssentials: boolean = true;
  videoGames: boolean = true;
  other: boolean = true;
  min: number = 0;
  max: number = 9999999999;
  constructor() { }
}
