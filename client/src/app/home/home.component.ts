import { Component, OnInit } from '@angular/core';
import { UserData } from '../models/user-data';
import { DataService } from '../data.service';
import { HttpService } from '../services/http.service';

import { COMMENT_DATA } from '../mock-data/data';
import { USER_DATA } from '../mock-data/data';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {

  userData:UserData;
  commentList:Comment[];

  constructor(private dataService:DataService, private httpService:HttpService) { }

  ngOnInit() {
    //   this.dataService.getUserData().subscribe(result => {
    //       this.userData = result;});
    /*
    this.dataService.getUserData().subscribe(result =>
      {
        this.userData = result;
        console.log(result);
      });
    */
    this.commentList = COMMENT_DATA;
    this.userData = USER_DATA;

    this.httpService.getObjects<any>("currentuser").subscribe(result=>{console.log(result);});

    this.httpService.getObjects<any>("userprofile/11").subscribe(result=>{console.log(result);});

  }

}
