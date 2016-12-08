import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from '../../models/playlist';

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

    this.playlist.videoList.forEach(element => {
      if (element.percentage == 100){
        this.count += 1;
      }
    });
  }

}
