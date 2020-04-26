import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../classes/product';
import { HomeComponentsService } from "../../../services/home-components.service";

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {
  @Input() product: Product;
  @Input() categ: string;
  @Input() cost: number;

  constructor(private HCS: HomeComponentsService) { }
  homeService: HomeComponentsService = this.HCS;
  cat: boolean = this.homeService[this.categ];
  ngOnInit(): void {
  }
  greaterThan(great, small) {
    return great > small
  }


}
