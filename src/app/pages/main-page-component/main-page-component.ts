import {Component, inject} from '@angular/core';
import {UserlessMainComponent} from '../../components/userless-main-component/userless-main-component';
import {UserMainComponent} from '../../components/user-main-component/user-main-component';
import {AuthService} from '../../services/auth-service';

@Component({
  imports: [
    UserlessMainComponent,
    UserMainComponent
  ],
  selector: 'app-main-page-component',
  styleUrl: './main-page-component.scss',
  templateUrl: './main-page-component.html',
})
export class MainPageComponent {
  protected readonly auth = inject(AuthService);

}
