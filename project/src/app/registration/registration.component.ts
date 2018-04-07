import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  register = {
    firstName : '',
    lastName : '',
    mail : '',
    password : '',
  }

  constructor(private  _router: Router) { }

  ngOnInit() {
  }

  clickLogin() {
    console.log('login');
    this._router.navigate(['login']);
  }

    /**
   * Try to login
   *
   * @param mailError email field error
   * @param passwordError  password field error
   */
  formSubmit(mailError, passwordError, firstNameError, lastNameError) {
    if (mailError === null && passwordError === null && firstNameError === null && lastNameError === null) {
      this._router.navigate(['login']);
      console.log('OK');
    } else {
      console.log('Who are you??');
    }
  }
}
