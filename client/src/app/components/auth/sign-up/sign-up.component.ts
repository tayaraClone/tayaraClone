import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phonenumber: number;
  constructor() { }

  ngOnInit(): void {
  }

  signUp() {
    console.log(this.firstname)
  }

}
