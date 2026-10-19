import { Component } from '@angular/core';
import {MatListItem, MatListItemTitle, MatNavList} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

@Component({
  imports: [
    MatNavList,
    MatListItem,
    MatIcon,
    MatListItemTitle,
    RouterLink
  ],
  selector: 'app-navbar-component',
  styleUrl: './navbar-component.scss',
  templateUrl: './navbar-component.html',
})
export class NavbarComponent {}
