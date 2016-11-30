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
    //   this.dataService.getUserData().subscribe(result => {
    //       this.userData = result;});
    this.dataService.getUserData().subscribe(result =>
      {
        this.userData = result;
        console.log(result);
      });
  }

}
