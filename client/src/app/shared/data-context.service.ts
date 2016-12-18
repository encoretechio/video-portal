import { Injectable } from '@angular/core';
import {Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DataContextService {

  private authToken:string;
  private userId:number;
  private userName:string;
  private userEmail:string;

  constructor(private requestOptions:RequestOptions) { }

  public setAuthToken(token:string){
    localStorage.setItem('AuthToken',token);
    this.authToken = token;
  }

  public getAuthToken(){
    return this.authToken;
  }

  public removeAuthToken(){
    localStorage.removeItem('AuthToken');
    this.authToken = null;
    //this.requestOptions.headers.delete('authorization');
  }

  public setUserDetails(id:number, name:string, email:string){
    localStorage.setItem('UserId',id.toString());
    this.userId = id;
    localStorage.setItem('UserName',name);
    this.userName = name;
    localStorage.setItem('UserEmail',email);
    this.userEmail = email;
  }

  public removeUserDetails(){
    localStorage.removeItem('UserId');
    this.userId = null;
    localStorage.removeItem('UserName');
    this.userName = null;
    localStorage.removeItem('UserEmail');
    this.userEmail = null;
  }

  // Check whether it returns
  public getUserId(){
    return this.userId;
  }

  public refresh(){
    this.authToken = localStorage.getItem('AuthToken');

    if(localStorage.getItem('AuthToken') != null){
          this.requestOptions.headers.set('authorization','Bearer '+ this.getAuthToken());
    }

    this.userId = parseInt(localStorage.getItem('UserId'));
    this.userName = localStorage.getItem('UserName');
    this.userEmail = localStorage.getItem('UserName');

  }

}
