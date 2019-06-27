
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpDataService } from '../http-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  public userName: string;
  public password: string;
  passwordMatch = false;


  constructor(private router: Router,
              private formBuilder: FormBuilder , private auth : HttpDataService) {
                this.createLoginForm();
              }

  ngOnInit() {}
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: null,
      password: null
    });
  }
  credentialMatch( loginFrm) {debugger;
    let flag = true;

    // tslint:disable-next-line:prefer-for-of
     if(loginFrm.form.controls.userName.value == "admin" && loginFrm.form.controls.password.value== "admin")
     {
       this.auth.loginUser = loginFrm.form.controls.userName.value ;
        this.goToHomePage();
        this.auth.isLoggedin = true;
        flag = false;
      }
      else
      {
        this.auth.isLoggedin = false;
        this.router.navigate(['logout']);
      }
 
 
  }

  goToHomePage() {
    this.router.navigate(['characters']);
  }

}