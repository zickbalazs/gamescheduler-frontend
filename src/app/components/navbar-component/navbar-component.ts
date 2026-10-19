import { Component } from '@angular/core';
import {MatListItem, MatListItemTitle, MatNavList} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';

@Component({
  imports: [
    MatNavList,
    MatListItem,
    MatIcon,
    MatListItemTitle
  ],
  selector: 'app-navbar-component',
  styleUrl: './navbar-component.scss',
  templateUrl: './navbar-component.html',
})
export class NavbarComponent {}
