import { Component, OnInit } from '@angular/core';
import { Playlist } from '../models/playlist';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {

  playlists:Playlist[];

  constructor(
  private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getPlaylists().then(result =>
      {
        this.playlists = result;
      });
  }

}
