import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../data.service';
import {LoginDetails} from '../models/login-details'

import {LoginService}  from '../services/login.service';
import {DataContextService} from "../shared/data-context.service";

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers: [DataService]
})
export class UserLoginComponent implements OnInit {

  details: LoginDetails = {
    username: "",
    password: "",
    rememberMe: true
  };
  valid = true;
  submitted: boolean = false;
  errorMessage:string = "";

  constructor(private router: Router,
              private dataContext:DataContextService,
              private loginService: LoginService) {
  }

  ngOnInit() {
    this.dataContext.removeData();
  }

  onSubmit(): void {
    this.submitted = true;
    this.errorMessage = "";
    this.valid = true;
    this.loginService.login(this.details.username, this.details.password,
      () => this.router.navigate(['']),
      () => {
        this.submitted = false;
        this.errorMessage = "Invalid Username or Password";
        this.valid = false;
      }
    );

  }
}
