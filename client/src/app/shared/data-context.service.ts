import { Injectable } from '@angular/core';
import {Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {UserData} from "../models/user-data";
import {User} from "../models/user";

const AUTH_TOKEN_KEY = 'AuthToken';
const USER_DATA_KEY = 'UserData';
const USER_KEY = 'User';

@Injectable()
export class DataContextService {

  private authToken:string;
  private userId:string;
  private user:User;
  private userData:UserData;

  constructor(private requestOptions:RequestOptions) { }

  public setAuthToken(token:string){
    localStorage.setItem(AUTH_TOKEN_KEY,token);
    this.authToken = token;
  }

  public getAuthToken(){
    return this.authToken;
  }

  public setUser(user:User){
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    this.user = user;
  }

  public getUser(){
    return this.user;
  }

  public removeData(){
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(USER_DATA_KEY);
    localStorage.removeItem(USER_KEY);
    this.authToken = null;
    this.userData = null;
    this.user = null;
    //this.requestOptions.headers.delete('authorization');
  }

  public setUserData(userData:UserData){
    if(userData)
    {
      this.userData = userData;
      for(let playList of userData.playlists){
        for(let video of playList.videos){
          if(userData.user.watchedVideos[video.id]) {
            video.watchedLength = userData.user.watchedVideos[video.id];
          }
        }
      }
      localStorage.setItem(USER_DATA_KEY,JSON.stringify(this.userData)) ;
    }
    else {
      localStorage.removeItem(USER_DATA_KEY);
      this.userData = null;
    }
  }

  public getUserData(){
    if(this.userData)
      return this.userData;
  }

  public refresh(){
    this.authToken = localStorage.getItem(AUTH_TOKEN_KEY);
    this.userData = JSON.parse(localStorage.getItem(USER_DATA_KEY));
    this.user = JSON.parse(localStorage.getItem(USER_KEY));

    if(localStorage.getItem(AUTH_TOKEN_KEY) != null){
          this.requestOptions.headers.set('authorization','Bearer '+ this.getAuthToken());
    }
  }

}
