import { Component, OnInit } from '@angular/core';
import {DataContextService} from "../shared/data-context.service";
import {UserData} from "../models/user-data";
import {User} from "../models/user";
import {HttpService} from "../services/http.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  private userData: UserData;
  private user:User;
  valid = true;
  submitted: boolean = false;
  errorMessage:string = "";

  constructor(private dataContext:DataContextService, private httpService:HttpService, ) { }

  ngOnInit() {
    this.userData = this.dataContext.getUserData(); // fetching progress data
    this.user = this.dataContext.getUser();
  }


  onSubmit(): void {
    this.submitted = true;
    this.errorMessage = "";
    this.valid = true;
    console.log("Submiting Profile")
    this.httpService.sendObjects<any>("user/"+this.user.id,this.user).subscribe(
      result=>{
        console.log(result)
        this.dataContext.setUser(result[0]);
        this.dataContext.setUserData(null);
      },
      ()=> console.log("Failed"),
      ()=> console.log("complete"))
  }

}
