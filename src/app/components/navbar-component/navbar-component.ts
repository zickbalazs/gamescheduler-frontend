import {Component, inject} from '@angular/core';
import {MatListItem, MatListItemIcon, MatListItemTitle, MatNavList} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {AuthService} from '../../services/auth-service';

@Component({
  imports: [
    MatNavList,
    MatListItem,
    MatIcon,
    MatListItemTitle,
    RouterLink,
    MatListItemIcon
  ],
  selector: 'app-navbar-component',
  styleUrl: './navbar-component.scss',
  templateUrl: './navbar-component.html',
})
export class NavbarComponent {
  protected readonly authService = inject(AuthService);

  Logout(){
    this.authService.tryLogout();
  }
}
