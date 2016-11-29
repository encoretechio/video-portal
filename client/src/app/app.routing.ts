import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './home/home.component';
import { ProgressComponent } from './progress/progress.component';

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
  }  

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
