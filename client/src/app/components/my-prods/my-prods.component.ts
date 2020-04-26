import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Product } from 'src/app/classes/product';
import { ProdsService } from 'src/app/services/prods.service';

@Component({
  selector: 'app-my-prods',
  templateUrl: './my-prods.component.html',
  styleUrls: ['./my-prods.component.css']
})
export class MyProdsComponent implements OnInit {

  constructor(private auth: AuthService, private prodSevices: ProdsService) { }
  sellerProds: Product[];

  ngOnInit(): void {
    this.auth.routeGuard(); // if user not logged in navigate to landing page
  }

  retreiveProds() { // if every thing went well this.sellerPrds will be an array with all seller prods
    this.prodSevices.sellerProds().subscribe((res: any) => {

      this.sellerProds = res;
    }, err => console.log(err)); // if there is an error console it
  }

}
