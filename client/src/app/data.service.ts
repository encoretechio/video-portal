import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Playlist } from './models/playlist';
import { LoginDetails } from './models/login-details';
import { USERS, PLAYLISTS } from './mock-data/data';

@Injectable()
export class DataService {

    constructor() { }
    validateLogin(loginDetails: LoginDetails): Promise<boolean> {
      var value = false;
      //console.log(loginDetails.username+" - "+loginDetails.password);
      for(let u of USERS)
      {
        //console.log(u.username+" - "+u.password);
        if(u.username == loginDetails.username && u.password==loginDetails.password)
        {
          value = true;
        }
      }
      return Promise.resolve(value);
    }


    getPlaylists():Promise<Playlist[]>
    {
      return Promise.resolve(PLAYLISTS);
    }

}
