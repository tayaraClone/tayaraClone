import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { Router } from '@angular/router';
import { ProdsService } from 'src/app/services/prods.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  searchName: string;
  products: Product[];
  constructor(private prodsService: ProdsService) { }

  ngOnInit(): void {
    this.searchName = sessionStorage.getItem("____________search__name__________")
  }

  retreiveProds(name) {
    this.prodsService.getProdByName(name).subscribe((res: any) => {
      this.products = res.results.products;
      console.log(this.products);
    }, err => console.log(err))
  }


}
