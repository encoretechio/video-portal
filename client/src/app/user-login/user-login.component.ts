import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { LoginDetails } from '../models/login-details'

import { LoginService }  from '../services/login.service';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers: [DataService]
})
export class UserLoginComponent implements OnInit {

  details:LoginDetails = {
      username:"",
      password:"",
      rememberMe:true
  };
  valid = true;

  constructor(
    private router:Router,
    private dataService:DataService,
    private loginService:LoginService) {
  }

  ngOnInit() {
  }

  onSubmit(): void {

      this.loginService.login(this.details.username,this.details.password,
          () =>this.router.navigate([''])
      );

  }
}
