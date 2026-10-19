import {Component, inject} from '@angular/core';
import {AuthService} from '../../services/auth-service';
import {RegistrationService} from '../../services/registration-service';
import {RouterLink} from '@angular/router';
import {MainPageSessionComponent} from '../sessions/main-page-session-component/main-page-session-component';

@Component({
  imports: [
    RouterLink,
    MainPageSessionComponent,
  ],
  selector: 'app-user-main-component',
  styleUrl: './user-main-component.scss',
  templateUrl: './user-main-component.html',
})
export class UserMainComponent {
  protected readonly auth = inject(AuthService);
  protected readonly regService = inject(RegistrationService);
}
