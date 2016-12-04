import { Injectable } from '@angular/core';
import {Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { HttpService }  from './http.service';
import { DataContextService }  from '../shared/data-context.service';

@Injectable()
export class LoginService {

  constructor(private requestOptions:RequestOptions, private httpService:HttpService, private dataContext:DataContextService) { }

  public login(emailParam:string, passwordParam:string){
    this.requestOptions.headers.set('Content-Type','application/json');
    let loginInfo = {email:emailParam,  password:passwordParam}

    this.httpService.sendObjects<any>("login",loginInfo).subscribe(
      result=>{
        //localStorage.setItem('AuthToken',result.token);
        this.dataContext.setAuthToken(result.token)
        this.requestOptions.headers.set('authorization','Bearer '+ this.dataContext.getAuthToken());
      }
    );
  }

  public logout(){

  }

}
