import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserData } from '../models/user-data';
import { USER_DATA } from '../mock-data/data';
import { PROGR_DATA } from '../mock-data/data';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  userData: UserData;
  private dataService: DataService;

  constructor() {
  }

  ngOnInit() {
    this.userData = PROGR_DATA; // fetching progress data
  }

}
