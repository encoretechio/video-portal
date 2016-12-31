import {Component, OnInit, Input} from '@angular/core';
import { UserData } from '../models/user-data';
import { User } from '../models/user';
import { Video } from '../models/video';
import { Playlist } from '../models/playlist';
import { Comment } from '../models/comment';
import { HttpService } from '../services/http.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService }  from '../services/login.service';
import { DataContextService }  from '../shared/data-context.service';
import {Observable} from 'rxjs/Rx';
import {ElementRef, ViewChild} from '@angular/core'; // To access DOM element and get the current time of <video>
import * as Utils from '../shared/utils'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})



export class HomeComponent implements OnInit {

  userData:UserData;
  commentList:Comment[];
  private sub: any;
  videoId: number;
  video: Video;
  videoProgress:any;


  @ViewChild('videoElement') videoElement:ElementRef;

  constructor(
    private httpService:HttpService,
    private route: ActivatedRoute,
    private router:Router,
    private loginService:LoginService,
    private dataContext:DataContextService) { }

  ngOnInit() {

    //this.commentList = COMMENT_DATA;
    this.video = <Video>{id: 0, title: "Welcome to the video portal", description: "This is the description of the welcome video.", link: "http://static.videogular.com/assets/videos/videogular.mp4"};

    //Subscribe to router to get the video id
    this.sub = this.route.params.subscribe(params => {
      this.videoId = +params['videoId']; // (+) converts string 'id' to a number
    });

    if(!this.userData)
    {
      this.httpService.getObject<User>("currentuser").subscribe(user=>{
        this.httpService.getObject<UserData>("userprofile/"+user.id).subscribe( result=>{
              this.userData = result;
              console.log(this.userData);

              let user = this.userData.user;
              this.dataContext.setUserData(this.userData);
              //find the video object from video id;

          //    Start a timer to listen to video play
          let timer = Observable.timer(2000,5000);
          timer.subscribe(this.updateVideoProgress.bind(this));


          });
      },
      err => {
        console.log("ERROR GETTING DATA: AUTHENTICATION ERROR  -->");
        //this.loginService.logout(true);
        //this.router.navigate((['login']));
        this.loginService.logout( () =>this.router.navigate(['login']) );
      });
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

    this.getComments(this.video.id);
  }

  addComment(content: string){

    let newComment = {text:content, author:this.userData.user.id, video:this.video.id}

    this.httpService.sendObjects<any>("comment",newComment).subscribe(result=>{
      console.log("Comment Added");
    });

    this.getComments(this.video.id);
  }

  getComments(videoId: number){
    this.httpService.getObjects<Comment>("comment/video/" + videoId).subscribe(result=>{
      this.commentList = result;
    });
  }

  updateVideoProgress(){

    let videoProgress = {}
    if(this.video && this.videoProgress){

      let progress = this.videoElement.nativeElement.currentTime;
      //this.progressList contain progress of all videos. If it is not there or less than the current progress update call will be executed
      if((typeof this.videoProgress[this.video.id] === "undefined")|| Utils.getSecondsFromLengthText(this.videoProgress[this.video.id]) < progress)
        videoProgress[this.video.id] = Utils.getLengthTextFromSeconds(progress);
      else
        return;
    }
    console.log(videoProgress)

    this.httpService.sendObjects<any>("user/"+this.userData.user.id+"/update_video",videoProgress).subscribe(result=>{
      this.videoProgress = result;
      this.updateUserDataUsingVideoProgress();
    });
  }

  updateUserDataUsingVideoProgress(){
    for(let playList of this.userData.playlists){
      for(let video of playList.videos){
        if(this.videoProgress[video.id]){
          video.watchedLength = this.videoProgress[video.id];
        }
        else
          video.watchedLength = 0;
      }
    }
  }
}
