import { Component, OnInit } from '@angular/core';
import { HomeComponentsService } from './../../../services/home-components.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private HCS: HomeComponentsService) { }

  ngOnInit(): void {
  }
  onClick(categorie) {
    this.HCS.toggle(categorie)
  }

}
