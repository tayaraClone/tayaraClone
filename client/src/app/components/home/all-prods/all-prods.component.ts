import { Component, OnInit } from '@angular/core';
import { ProdsService } from '../../../services/prods.service';
import { Product } from '../../../classes/product';
import { HomeComponentsService } from './../../../services/home-components.service';

@Component({
  selector: 'app-all-prods',
  templateUrl: './all-prods.component.html',
  styleUrls: ['./all-prods.component.css']
})
export class AllProdsComponent implements OnInit {

  prodsData: Product[] = [];

  constructor(private prodsAPI: ProdsService, private HCS: HomeComponentsService) { }

  homeService: HomeComponentsService = this.HCS;
  ngOnInit(): void {
    this.getAllProds();
  }

  getAllProds() {
    this.prodsAPI.getAllProds() // retreive all products 
      .subscribe((res: any) => {
        this.prodsData = res; // set this.prodsData to the retreived data
        this.prodsData.reverse() // reverse array
      }, err => { // console error if there is one
        console.log(err);
      })

  }

}
