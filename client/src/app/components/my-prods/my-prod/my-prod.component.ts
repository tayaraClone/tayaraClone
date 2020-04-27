import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { ProdsService } from 'src/app/services/prods.service';

@Component({
  selector: 'app-my-prod',
  templateUrl: './my-prod.component.html',
  styleUrls: ['./my-prod.component.css']
})
export class MyProdComponent implements OnInit {
  @Input() product: Product;
  @Input() stock: string;
  constructor(private productService: ProdsService) { }
  buttonCondition() { return this.stock === 'finished' };
  changeDescription(e) {
    let _id = e.target.name;
    let description = prompt('Write a new description for your new description')
    while (description === "") {
      description = prompt('description is empty')
    }
    this.onUpdateDescription(_id, description);
  }
  ngOnInit(): void {
  }

  changeName(e) {
    let _id = e.target.name; // retreive id from target name
    let name = prompt('Write a new name for your new name') // retreive new name
    while (name === "") {
      name = prompt('name is empty') // if input is empty send another prompt
    }
    this.onUpdateName(_id, name);
  }

  onUpdateName(_id, name) {
    this.productService.changeProdName(_id, name) // make put request to change name in db
    this.changeNameInTemplate(name)
  }

  changeNameInTemplate(name) { // change name in template
    this.product.name = name;
  }

  onFinishedStock(id) {
    this.productService.finishedProducts(id) // make put request to change stock condition to finished in db
    this.stock = "finished";
  }

  onUpdateDescription(_id, description) {
    this.productService.changeDescription(_id, description); // make put http request to change product description
  }

}
