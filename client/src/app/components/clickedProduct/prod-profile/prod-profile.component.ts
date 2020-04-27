import { Component, OnInit } from '@angular/core';
import { ProdsService } from 'src/app/services/prods.service';
import { SearchProd } from 'src/app/classes/search-prod';
import { Product } from 'src/app/classes/product';
import { Seller } from 'src/app/classes/seller';

@Component({
  selector: 'app-prod-profile',
  templateUrl: './prod-profile.component.html',
  styleUrls: ['./prod-profile.component.css']
})
export class ProdProfileComponent implements OnInit {
  product: Product;
  account: Seller;
  constructor(private prodService: ProdsService) { }
  _id: string;
  ngOnInit(): void {
    this._id = window.location.pathname.split('/')[2]; // retreive id from path name
    this.retreiveProdProfile(this._id);
  }

  retreiveProdProfile(_id) {
    this.prodService.getProdProfile(_id) // retreive prod profile (product and its seller data)
      .subscribe((res: any) => {
        this.product = res.results.data.product; // set prodProfile to product data
        this.account = res.results.data.account; // set account to seller data
        console.log(this.product)
      }, err => console.log(err))
  }

}
