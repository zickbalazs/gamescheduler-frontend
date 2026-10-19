import {Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {UserlessMainComponent} from '../../components/userless-main-component/userless-main-component';
import {UserMainComponent} from '../../components/user-main-component/user-main-component';

@Component({
  imports: [
    RouterLink,
    UserlessMainComponent,
    UserMainComponent
  ],
  selector: 'app-main-page-component',
  styleUrl: './main-page-component.scss',
  templateUrl: './main-page-component.html',
})
export class MainPageComponent {
  userLoggedIn = signal(true);
}
