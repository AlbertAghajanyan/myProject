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
    if (mailError === null ) {
      this._router.navigate(['home']);
      console.log('OK');
    } else {
      console.log('Who are you??');
    }
  }
}


/*
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  checkEmail = false;
  checkPsw = false;
  ToggleButton: boolean = true;
  data = { 
    "email" : "",
    "password" : ""
  };
  
  formSubmit() {
    if(true == this.checkEmail  && true == this.checkPsw) {
      alert("Login-Go Home page");
      this.router.navigate(['home/']);
    } else {
      alert("No Login");
    }
  }

validateEmail() {
    var regularExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if ("" == this.data.email) {
        document.getElementById("alertEmail").innerHTML = "Please, fill out this field";
        this.setMyAtributtsForEmail();
        this.checkEmail = false;
      } else if (!regularExpression.test(this.data.email)) {
        document.getElementById("alertEmail").innerHTML = "Invalid mail format";
        this.setMyAtributtsForEmail();
        this.checkEmail = false;
      } else {
        document.getElementById("alertEmail").style.display = "none";
        document.getElementById("inputEmail").style.borderColor = "green";
        this.checkEmail = true;
        this.validate();
      }
  }

  validatePassword() {
    var regularExpression = /^(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,20}$/;
    if ("" == this.data.password) {
      document.getElementById("alertPsw").innerHTML = "Please, fill out this field";
      this.setMyAtributtsForPassword();
      this.checkPsw = false;
    } else if (!regularExpression.test(this.data.password)) {
      document.getElementById("alertPsw").innerHTML = "Password should contain 6-20 symbols <br> (required one lowercase letter and one number)";
      this.setMyAtributtsForPassword();
      this.checkPsw = false;
    } else {
      document.getElementById("alertPsw").style.display = "none";
      document.getElementById("inputPassword").style.borderColor = "green";
      this.checkPsw = true;
      this.validate();
    }
  }

  setMyAtributtsForPassword() {
    document.getElementById("alertPsw").style.display = "block";
    document.getElementById("inputPassword").style.borderColor = "red";
    this.ToggleButton=true;
  }

  setMyAtributtsForEmail() {
    document.getElementById("alertEmail").style.display = "block";
    document.getElementById("inputEmail").style.borderColor = "red";
    this.ToggleButton=true;
  }

  validate() {
    if (true == this.checkEmail && true == this.checkPsw) {
        this.ToggleButton=false;
    }
  }
}
*/
