import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { UserData } from './models/user-data';
import { USER_DATA} from './mock-data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'app works!';
  userData:UserData;

  constructor(
    private router:Router,
    private dataService:DataService) {
  }
  ngOnInit() {
      this.userData = USER_DATA;
    // this.dataService.getUserData().subscribe(result =>
    //   {
    //     this.userData = result;
    //   });
  }

  isRouteNotActiveByMe(routePath: string)
  {
    return this.router.url!=routePath;
  }
}
