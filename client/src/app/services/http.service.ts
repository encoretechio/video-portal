import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';  //'rxjs/Observable'
import { Http, Response} from '@angular/http';

import {Headers, RequestOptions} from '@angular/http';

@Injectable()
export class HttpService {
    private baseUrl:string;

    constructor(private http:Http, private requestOptions:RequestOptions ) {
      this.baseUrl="http://52.36.197.150:1337/";
    }

    private handleError(error: Response) {
      if(error["status"].toString() == "403"){
        //  this.loginService.logout();
      }
      return Observable.throw(error || 'Server error');
    }

    public getStringOutput<T>(path: string): Observable<T>{
          return this.http.get(this.baseUrl+path)
              .map((response: Response) => <T> response.json())
              .do(data => console.log('Retrieved string from: ' + this.baseUrl+path))
              .catch(this.handleError);
    }

    public getObject<T> (path: string): Observable<T>  {
        return this.http.get(this.baseUrl+path)
            .map((response: Response) => <T> response.json())
            .do(data => console.log('Retrieved data from: ' + this.baseUrl+path))
            .catch(this.handleError);
    }

    public getObjects<T> (path: string): Observable<T[]>  {
        return this.http.get(this.baseUrl+path)
            .map((response: Response) => <T[]> response.json())
            .do(data => console.log('Retrieved data from: ' + this.baseUrl+path))
            .catch(this.handleError);
    }

    public sendObjects<T> (path: string, object: T)  {
         return this.http.post(this.baseUrl+path, object)
         .map((response: Response) => <T> response.json())
         .catch(this.handleError);

    }

    public updateObjects<T> (path: string, object: T)  {
         return this.http.put(this.baseUrl+path, object)
         .map((response: Response) => <T> response.json())
         .catch(this.handleError);

    }

    public addHeader(headerName: string, headerValue: string ){
      (this.requestOptions.headers as Headers).set(headerName, headerValue);
    }
}
