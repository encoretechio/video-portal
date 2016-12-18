import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './home/playlist/playlist.component';
import { ProgressComponent } from './progress/progress.component';
import { ProgressListComponent } from './progress/progress-list/progress-list.component';
import { UserProfileComponent }  from './user-profile/user-profile.component';
import { CommentListComponent }  from './home/comment-list/comment-list.component';

import { HttpService }  from './services/http.service';
import { LoginService }  from './services/login.service';
import { DataContextService }  from './shared/data-context.service';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    HomeComponent,
    PlaylistComponent,
    ProgressComponent,
    ProgressListComponent,
    UserProfileComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AlertModule
  ],
  providers: [
    HttpService,
    LoginService,
    DataContextService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
