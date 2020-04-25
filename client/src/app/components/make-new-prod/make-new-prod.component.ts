import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-make-new-prod',
  templateUrl: './make-new-prod.component.html',
  styleUrls: ['./make-new-prod.component.css']
})
export class MakeNewProdComponent implements OnInit {
  name: string = "";
  cost: number;
  deliveryCondition: string = "";
  productPlace: string = "";
  image: string = "";
  categorie: string = "";
  stockCondition: string = "";
  description: string = "";


  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.routeGuard()

  }
  onSave() {
    let urlValidator = /http:\/\//;

    if (this.name === "" ||
      !urlValidator.test(this.image) ||
      this.description === "" ||
      this.categorie === "" ||
      this.stockCondition === "" ||
      this.productPlace === "" ||
      !this.cost ||
      this.deliveryCondition === "") {

      if (this.name === "") alert("product's name is empty")
      else if (!urlValidator.test(this.image)) alert("image url is not valid")
      else if (this.description === "") alert('description is empty')
      else if (this.categorie === "") alert("categorie is not picked")
      else if (this.stockCondition === "") alert('stock condition is not picked')
      else if (this.productPlace === "") alert('product place is empty')
      else if (!this.cost) alert('cost is empty')
      else if (this.deliveryCondition === "") alert('delivery condition is not picked')
    } else {
      let newProd = {
        name: this.name,
        image: this.image,
        description: this.description,
        categorie: this.categorie,
        stockCondition: this.stockCondition,
        deliveryCondition: this.deliveryCondition,
        cost: this.cost,
        productPlace: this.productPlace
      }
    }
  }

}
