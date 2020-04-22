import { Component, OnInit } from '@angular/core';
import { ClientProdsService } from '../../../services/client-prods.service';
import { Product } from '../../../classes/product';

@Component({
  selector: 'app-all-prods',
  templateUrl: './all-prods.component.html',
  styleUrls: ['./all-prods.component.css']
})
export class AllProdsComponent implements OnInit {

  prodsData: Product[] = [];

  constructor(private prodsAPI: ClientProdsService) { }

  ngOnInit(): void {
    this.getAllProds();
  }

  getAllProds() {
    this.prodsAPI.getAllProds()
      .subscribe((res: any) => {
        this.prodsData = res;
      }, err => {
        console.log(err);
      })

  }

}
