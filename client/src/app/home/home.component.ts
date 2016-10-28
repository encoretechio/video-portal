import { Component, OnInit } from '@angular/core';
import { Playlist } from '../models/playlist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  playlists:Playlist[] = [
  { id: 11, name: 'Mr. Nice' , description:"Desc",videoList:[ {  id: 123, title: "Video1", description:"string"},
                                                          {  id: 123, title: "Video3", description:"string"},
                                                          {  id: 123, title: "Video2", description:"string"} ] },
  { id: 12, name: 'Mr. Nice - 1' , description:"Desc",videoList:[] },
  { id: 13, name: 'Mr. Nice - 2' , description:"Desc",videoList:[] }
];

  constructor() { }

  ngOnInit() {
  }

}
