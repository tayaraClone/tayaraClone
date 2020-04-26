import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-opened-acc-nav',
  templateUrl: './opened-acc-nav.component.html',
  styleUrls: ['./opened-acc-nav.component.css']
})
export class OpenedAccNavComponent implements OnInit {

  constructor(private authServ: AuthService) { }

  authService: AuthService = this.authServ;
  ngOnInit(): void {
  }

}
