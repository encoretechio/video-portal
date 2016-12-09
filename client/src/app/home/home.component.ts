import { Component, OnInit } from '@angular/core';
import { UserData } from '../models/user-data';
import {User} from '../models/user';
import {Video} from '../models/video';
import {Playlist} from '../models/playlist';
import { Comment } from '../models/comment';
import { HttpService } from '../services/http.service';
import { ActivatedRoute } from '@angular/router';

import { COMMENT_DATA, USER_DATA } from '../mock-data/data';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //providers: [HttpService]
})
export class HomeComponent implements OnInit {

  userData:UserData;
  commentList:Comment[];
  private sub: any;
  videoId: number;
  video: Video;

  constructor(private httpService:HttpService, private route: ActivatedRoute) { }



  ngOnInit() {

    this.commentList = COMMENT_DATA;

    this.video = <Video>{id: 0, title: "Welcome to the video portal", description: "This is the description of the welcome video.", link: "http://static.videogular.com/assets/videos/videogular.mp4"};

    //Subscribe to router to get the video id
    this.sub = this.route.params.subscribe(params => {
      this.videoId = +params['videoId']; // (+) converts string 'id' to a number
    });

    if(!this.userData)
    {
      this.userData = USER_DATA;
      this.httpService.getObject<User>("currentuser").subscribe(user=>{
        this.httpService.getObject<UserData>("userprofile/"+user.id).subscribe(result=>{
          this.userData = result;
          console.log(this.userData);
          //find the video object from video id;
          if(this.videoId)
            for(let playList of this.userData.playlists){
              console.log(playList)
              for(let video of playList.videos){
                console.log(video)
                if(video.id==this.videoId)
                {
                  this.video = video
                  break;
                }
              }
            }

        });
        ;});

    }

  }
  
  
  changeVideo(id: number) {
    for(let playList of this.userData.playlists){
      for(let video of playList.videos){
        if(video.id==id){
          this.video = video
          break;
        }
      }
    }
  }

}
