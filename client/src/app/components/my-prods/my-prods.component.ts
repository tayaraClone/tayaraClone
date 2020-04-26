import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-my-prods',
  templateUrl: './my-prods.component.html',
  styleUrls: ['./my-prods.component.css']
})
export class MyProdsComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.routeGuard(); // if user not logged in navigate to landing page
  }

}
