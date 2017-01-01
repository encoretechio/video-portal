import { Injectable } from '@angular/core';
import {Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {UserData} from "../models/user-data";

@Injectable()
export class DataContextService {

  private authToken:string;
  private userData:UserData;

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

  public setUserData(userData:UserData){
    this.userData = userData;
    for(let playList of userData.playlists){
      for(let video of playList.videos){
        if(userData.user.watchedVideos[video.id]) {
          video.watchedLength = userData.user.watchedVideos[video.id];
        }
      }
    }
    console.log(this.userData)
  }

  public getUserData(){
    return this.userData;
  }

  public refresh(){
    this.authToken = localStorage.getItem('AuthToken');

    if(localStorage.getItem('AuthToken') != null){
          this.requestOptions.headers.set('authorization','Bearer '+ this.getAuthToken());
    }
  }

}
