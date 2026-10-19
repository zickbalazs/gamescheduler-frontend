import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {NavbarComponent} from './components/navbar-component/navbar-component';

@Component({
  imports: [RouterOutlet, MatToolbar, MatIconButton, MatIcon, MatSidenavContainer, MatSidenav, MatSidenavContent, NavbarComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('gamescheduler-frontend');
  protected readonly navOpen = signal(false);
}
