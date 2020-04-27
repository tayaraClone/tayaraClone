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

  onFinishedStock(id) {
    this.productService.finishedProducts(id)
  }

  onUpdateDescription(_id, description) {
    this.productService.changeDescription(_id, description);
  }


}
