import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  login = {
    mail : '',
    password : '',
    rememberMe : false
  }

  constructor(private  _router: Router) {
  }

  ngOnInit() {
  }

  /**
   * Try to login
   *
   * @param mailError email field error
   * @param passwordError  password field error
   */
  formSubmit(mailError, passwordError) {
    if (mailError === null && passwordError === null) {
      this._router.navigate(['home']);
      console.log('OK');
    } else {
      console.log('Who are you??');
    }
  }

  clickRegistr() {
    console.log('registr');
    this._router.navigate(['registration']);
  }
}
