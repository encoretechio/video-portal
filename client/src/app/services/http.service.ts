import { Component, Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';  //'rxjs/Observable'
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Router } from '@angular/router';
import { DataContextService }  from '../shared/data-context.service';

@Injectable()
export class HttpService {
    private baseUrl:string;
    //private loginService:LoginService;  ---> Circular Dependency

    constructor(private http:Http, private router:Router, private requestOptions:RequestOptions, private dataContext:DataContextService) {
      this.baseUrl="http://52.36.197.150:1337/";
    }

    private handleError(error: Response) {

      // Error with JSON parsing errors  toString of undefined.
      if(error["status"] && error["status"].toString() == "401")
      {
          console.log("Authorization Error : Should logout");
          //Logout : cannt use LoginService.logout cause of Circular Dependency

          //this.requestOptions.headers.set('Content-Type','application/json');
          //this.dataContext.removeAuthToken();
          //this.router.navigate(['login']);
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
         .map((response: Response) => response.json())
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
