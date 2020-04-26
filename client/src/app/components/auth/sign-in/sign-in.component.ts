import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authServ: AuthService) { }
  password: string;
  email: string;
  ngOnInit(): void {
  }

  onClick() {
    let emailValidator = /@./; // validate email with regular expression

    if (!emailValidator.test(this.email) || this.password.length < 9) {
      if (!emailValidator.test(this.email)) alert('your email is not valid')
      if (this.password.length < 9) alert('you have to write 9 or more characters in your password')

    } else {
      let creds = {
        password: this.password,
        email: this.email
      }
      this.authServ.signIn(creds);
    }

  }

}
