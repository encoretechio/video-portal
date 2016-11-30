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
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
