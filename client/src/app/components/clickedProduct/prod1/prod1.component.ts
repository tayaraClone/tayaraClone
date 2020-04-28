import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/classes/product';

@Component({
  selector: 'app-prod1',
  templateUrl: './prod1.component.html',
  styleUrls: ['./prod1.component.css']
})
export class Prod1Component implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
