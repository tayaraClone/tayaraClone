import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/classes/product';

@Component({
  selector: 'app-prod2',
  templateUrl: './prod2.component.html',
  styleUrls: ['./prod2.component.css']
})
export class Prod2Component implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
