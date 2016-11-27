import { Injectable } from '@angular/core';
import { UserData } from './models/user-data';
import { LoginDetails } from './models/login-details';
import { USER_DATA} from './mock-data/data';
import { Http, Response, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
    private url = 'http://52.36.197.150:1337';  // URL to web API
    private headers = new Headers({'Content-Type': 'application/json'});
    private static token = "";
    constructor(private http: Http) { }
    validateLogin(loginDetails: LoginDetails): Observable<Boolean> {
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

    getHeadersWithToken(){
        console.log("Get token handel"+DataService.token);
        return new Headers({'Content-Type': 'application/json', 'authorization':('Bearer '+DataService.token)});
    }

    private extractData(res: Response) {
      let body = res.json();
      console.log(body);
      DataService.token = body.token;
      console.log(DataService.token)
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

    extractUserData(res: Response){
        let body = res.json();
        // let userData:UserData = body.data;
        return USER_DATA;
    }

    getUserData():Observable<UserData>
    {
        //return USER_DATA;
        return this.http.get(this.url+"/userprofile/3", {headers: this.getHeadersWithToken()})
                      .map(this.extractUserData)
                      .catch(this.handleError);
    }

}
