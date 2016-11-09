import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Playlist } from './models/playlist';
import { LoginDetails } from './models/login-details';
import { USERS, PLAYLISTS } from './mock-data/data';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
    private url = 'http://http://52.36.197.150:1337';  // URL to web API
    constructor(private http: Http) { }
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



      console.error(      this.http.get(this.url)
                      .map(this.extractData)
                      .catch(this.handleError));

      return Promise.resolve(value);
    }

    private extractData(res: Response) {
      let body = res.json();
      return body.data || { };
    }

    private handleError (error: Response | any) {
  // In a real world app, we might use a remote logging infrastructure
      let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
    }


    getPlaylists():Promise<Playlist[]>
    {
      return Promise.resolve(PLAYLISTS);
    }

}
