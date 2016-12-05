import { Injectable } from '@angular/core';
import {Headers, RequestOptions} from '@angular/http';

@Injectable()
export class DataContextService {

  private authToken:string;

  constructor(private requestOptions:RequestOptions) { }

  public setAuthToken(token:string){
    localStorage.setItem('AuthToken',token);
    this.authToken = token;
  }

  public getAuthToken(){
    return this.authToken;
  }

  public refresh(){
    //console.log("refreshToken");
    this.authToken = localStorage.getItem('AuthToken');

    if(localStorage.getItem('AuthToken') != null){
          this.requestOptions.headers.set('authorization','Bearer '+ this.getAuthToken());
    }
  }

}
