import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Playlist } from '../../models/playlist';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  @Input()
  playlist:Playlist;

  @Input()
  indexValue:number;

  @Input()
  selectedVideoId:number;

  @Output()
  onVideoLink = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {

  }

    selectVideo(id: number) {
      this.onVideoLink.emit(id);
    }






}
