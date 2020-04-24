import { Component, OnInit } from '@angular/core';
import { HomeComponentsService } from './../../../services/home-components.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  constructor(private HCS: HomeComponentsService) { }

  ngOnInit(): void {
  }

  onChange(e) {
    this.HCS.newBudget(e.target.name, Number(e.target.value || 0))
  }

}
