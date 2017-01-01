import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from '../../models/playlist';
import {getSecondsFromLengthText} from "../../shared/utils";

@Component({
  selector: 'app-progress-list',
  templateUrl: './progress-list.component.html',
  styleUrls: ['./progress-list.component.css']
})
export class ProgressListComponent implements OnInit {

  @Input()
  playlist:Playlist;

  @Input()
  indexValue:number;

  private count = 0;
  constructor() { }

  ngOnInit() {

    this.playlist.videos.forEach(element => {
      if (getSecondsFromLengthText(element.watchedLength) >= getSecondsFromLengthText(element.length)){
        this.count += 1;
      }
    });
  }

}
