import { Component, OnInit } from '@angular/core';
import {DataContextService} from "../shared/data-context.service";
import {UserData} from "../models/user-data";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  private userData: UserData;

  constructor(private dataContext:DataContextService) { }

  ngOnInit() {
    this.userData = this.dataContext.getUserData(); // fetching progress data
  }

}
