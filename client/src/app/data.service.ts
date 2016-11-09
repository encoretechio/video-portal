import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Playlist } from './models/playlist';
import { LoginDetails } from './models/login-details';
import { USERS, PLAYLISTS } from './mock-data/data';
import { Http, Response, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
    private url = 'http://52.36.197.150:1337';  // URL to web API
    private headers = new Headers({'Content-Type': 'application/json'});
    private token = "";
    constructor(private http: Http) { }
    validateLogin(loginDetails: LoginDetails): Observable<Boolean> {
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


      console.log("before login");
//       return this.http.post(this.url+"/signup",
//                             JSON.stringify({
//     "username": "jana",
//     "firstName": "Janaka",
//     "lastName": "Chathuranga",
//     "email": "jana@gmail.com",
//     "contactNumber": "7111111111",
//     "password": "111",
//     "confirmPassword":"111",
//     "active": null
// }), {headers: this.headers})
//                     .map(this.extractData)
//                     .catch(this.handleError);

      return this.http.post(this.url+"/login", JSON.stringify({email: loginDetails.username, password:loginDetails.password}), {headers: this.headers})
                    .map(this.extractData)
                    .catch(this.handleError);

    }

    private extractData(res: Response) {
      let body = res.json();
      console.log(body);
      this.token = body.token;
      return body.data || { };
    }

    private handleError (error: Response | any) {
  // In a real world app, we might use a remote logging infrastructure

      console.log("error at data service");
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
