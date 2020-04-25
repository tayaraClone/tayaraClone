import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

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
  constructor(private auth: AuthService) { }
  authServices: AuthService = this.auth;

  ngOnInit(): void {
  }

  signUp() {
    let emailValid = /@./;
    let phonenumber = this.phonenumber + "";
    if (
      this.firstname === "" ||
      this.lastname === "" ||
      !emailValid.test(this.email) ||
      this.password.length < 9 ||
      phonenumber.length !== 8) {

      if (this.firstname === "") alert('First Name is empty')
      else if (this.lastname === "") alert('Last Name is empty')
      else if (!emailValid.test(this.email)) alert('Email is not valid')
      else if (this.password.length < 9) alert('you have to insert more than 9 characters')
      else if (phonenumber.length !== 8) alert('you have to insert 8 numbers to be your phone number validated')

    } else {

      let creds = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        phonenumber: this.phonenumber,
        createdAt: Date()
      }
      this.auth.signUp(creds)

    }
    // let creds = {
    //   firstname: this.firstname,
    //   lastname: this.lastname,
    //   email: this.email,
    //   password: this.password,
    //   phonenumber: this.phonenumber,
    //   createdAt: Date()
    // }
    // console.log(creds)
  }

}
