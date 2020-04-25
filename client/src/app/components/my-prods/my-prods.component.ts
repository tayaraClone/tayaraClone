import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-prods',
  templateUrl: './my-prods.component.html',
  styleUrls: ['./my-prods.component.css']
})
export class MyProdsComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (!this.auth.openedAcc()) {
      this.router.navigate(['/'])
    }
  }

}
