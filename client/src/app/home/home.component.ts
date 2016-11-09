import { Component, OnInit } from '@angular/core';
import { UserData } from '../models/user-data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {

  userData:UserData;

  constructor(private dataService:DataService) { }

  ngOnInit() {
      this.userData = this.dataService.getUserData();
    // this.dataService.getUserData().then(result =>
    //   {
    //     this.userData = result;
    //   });
  }

}
