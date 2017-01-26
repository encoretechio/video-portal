import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { UserData } from './models/user-data';
import { USER_DATA} from './mock-data/data';
import { DataContextService} from './shared/data-context.service';
import { LoginService }  from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'LetsBuild Video Portal';
  userData:UserData;

  constructor(
    private router:Router,
    private dataService:DataService,
    private dataContext:DataContextService,
    private loginService:LoginService) {



  }
  ngOnInit() {
    this.userData = USER_DATA;

    console.log("HOME COMPONENT");
    this.dataContext.refresh();
  }

  isRouteNotActiveByMe(routePath: string)
  {
    return this.router.url!=routePath;
  }

  LogOut(){
    console.log("Logging Out");
    this.loginService.logout( () =>this.router.navigate(['login']) );
  }

}
