import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './home/home.component';
import { ProgressComponent } from './progress/progress.component';
import { UserProfileComponent }  from './user-profile/user-profile.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'progress',
    component: ProgressComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
