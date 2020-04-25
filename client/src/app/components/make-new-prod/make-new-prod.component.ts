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

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.routeGuard()
  }
  onSave() {
    console.log(this.deliveryCondition, this.name)
  }

}
