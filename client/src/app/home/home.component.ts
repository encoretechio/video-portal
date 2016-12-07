import { Component, OnInit } from '@angular/core';
import { UserData } from '../models/user-data';
import {User} from '../models/user';
import {Playlist} from '../models/playlist';
import { Comment } from '../models/comment';
import { HttpService } from '../services/http.service';

import { COMMENT_DATA } from '../mock-data/data';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //providers: [HttpService]
})
export class HomeComponent implements OnInit {

  userData:UserData;
  commentList:Comment[];

  constructor(private httpService:HttpService) { }

  ngOnInit() {

    this.commentList = COMMENT_DATA;
    //this.userData = USER_DATA;

    this.httpService.getObject<User>("currentuser").subscribe(user=>{
      this.httpService.getObject<UserData>("userprofile/"+user.id).subscribe(result=>{
        this.userData = result;
        console.log(this.userData);
      });
      ;});
  }

}
