import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/classes/product';

@Component({
  selector: 'app-my-prod',
  templateUrl: './my-prod.component.html',
  styleUrls: ['./my-prod.component.css']
})
export class MyProdComponent implements OnInit {
  @Input() product: Product;
  @Input() stock: string;
  constructor() { }
  buttonCondition() { return this.stock === 'limited' };
  ngOnInit(): void {
  }


}
