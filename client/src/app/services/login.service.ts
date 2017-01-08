import { Injectable } from '@angular/core';
import {Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { HttpService }  from './http.service';
import { DataContextService }  from '../shared/data-context.service';

@Injectable()
export class LoginService {

  constructor(private requestOptions:RequestOptions, private httpService:HttpService, private dataContext:DataContextService) { }

  public login(emailParam:string, passwordParam:string, onSuccess){
    this.requestOptions.headers.set('Content-Type','application/json');
    let loginInfo = {email:emailParam,  password:passwordParam}
    let loginSuccess:Boolean;

    this.httpService.sendObjects<any>("login",loginInfo).subscribe(
      result=>{
        this.dataContext.setAuthToken(result.token)
        this.dataContext.setUser(result.user);
        console.log(result);
        this.dataContext.refresh();
        loginSuccess = true;
      },
      error => {
        console.log("Error at login Component"+error);
        loginSuccess = false;
      },
      () => {
        onSuccess(loginSuccess);
      }
    );

  }

  public logout(onSuccess){
    this.requestOptions.headers.set('Content-Type','application/json');
    this.dataContext.removeData();
    onSuccess(true);
  }

}
