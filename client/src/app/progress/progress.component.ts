import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserData } from '../models/user-data';
import { USER_DATA } from '../mock-data/data';
import { PROGR_DATA } from '../mock-data/data';
import {DataContextService} from "../shared/data-context.service";
import {getSecondsFromLengthText} from "../shared/utils";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  userData: UserData;
  totalProgress:number;
  private dataService: DataService;


  constructor(
    private dataContext:DataContextService) {
  }

  ngOnInit() {
    this.userData = this.dataContext.getUserData(); // fetching progress data
    let totalDuration  = 0;
    let watchedDuration = 0;
    for(let playList of this.userData.playlists){
      for(let video of playList.videos) {
        totalDuration += getSecondsFromLengthText(video.length);
        watchedDuration += getSecondsFromLengthText(video.watchedLength);
      }
    }
    this.totalProgress = watchedDuration*100/totalDuration;

  }

}
