import { Injectable } from '@angular/core';
import { User } from './models/user';
import { LoginDetails } from './models/login-details';
import { USERS } from './mock-data/users';

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

}
