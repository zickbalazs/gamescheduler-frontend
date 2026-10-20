import { Routes } from '@angular/router';
import {MainPageComponent} from './pages/main-page-component/main-page-component';
import {LoginPageComponent} from './pages/login-page-component/login-page-component';
import {RegistrationPageComponent} from './pages/registration-page-component/registration-page-component';
import {LeaguePageComponent} from './pages/league-page-component/league-page-component';

export const routes: Routes = [
  {
    title: 'ZGS',
    path: '',
    component: MainPageComponent
  },
  {
    title: 'ZGS | Login',
    path: 'login',
    component: LoginPageComponent
  },
  {
    title: 'ZGS | Registration',
    path: 'register',
    component: RegistrationPageComponent
  },
  {
    title: 'ZGS | Leagues',
    path: 'leagues',
    component: LeaguePageComponent
  }
];
