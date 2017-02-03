import {Component, OnInit} from '@angular/core';
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
  private userData:UserData;
  private user:User;
  submitted:boolean = false;

  showMessage = false;
  message:string = "";
  messageType:string = "info";

  showMessagePassword:boolean = false;
  messagePassword:string = "";
  messageTypePassword:string = "info";

  passwords = {oldPassword:"", newPassword:"", confirmNewPassword:""};

  passwordErrorMessage:string = "";

  constructor(private dataContext:DataContextService, private httpService:HttpService) {
  }

  ngOnInit() {
    this.userData = this.dataContext.getUserData(); // fetching progress data
    this.user = this.dataContext.getUser();
  }


  onSubmit():void {
    this.submitted = true;
    this.message = "";
    this.showMessage = false;
    console.log("Submiting Profile")
    this.httpService.sendObjects<any>("user/" + this.user.id, this.user).subscribe(
      result=> {
        console.log(result)
        this.dataContext.setUser(result[0]);
        this.dataContext.setUserData(null);
      },
      ()=> {
        this.message = "Can't update user info. Check your internet connection."
        this.showMessage = true;
        this.messageType = "fail";
        this.submitted = false;
      },
      ()=> {
        this.message = "Profile was saved."
        this.showMessage = true;
        this.messageType = "success";
        this.submitted = false;
      }
    )
  }

  onSubmitPasswordForm():void {
    if(this.passwords.newPassword!=this.passwords.confirmNewPassword)
    {
      this.messagePassword = "Passwords doesn't match."
      this.showMessagePassword = true;
      this.messageTypePassword = "fail";
      this.submitted = false;
      return;
    }

    this.submitted = true;
    this.messagePassword = "";
    this.showMessagePassword = false;
    console.log("Submitting Changing Password Form.")

    this.httpService.sendObjects<any>("user/"+ this.user.id+"/change_password/" , this.passwords).subscribe(
      result => {
        console.log(result);
      },
      ()=> {
        this.messagePassword = "Can't update password. Check your internet connection."
        this.showMessagePassword = true;
        this.messageTypePassword = "fail";
        this.submitted = false;
      },
      ()=> {
        this.messagePassword = "Password was update."
        this.showMessagePassword = true;
        this.messageTypePassword = "success";
        this.submitted = false;
        this.passwords.oldPassword = "";
        this.passwords.newPassword = "";
        this.passwords.confirmNewPassword = "";
      });
  }

}
