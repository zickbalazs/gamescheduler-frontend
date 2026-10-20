import {Component, computed, inject, input, OnInit} from '@angular/core';
import {RegistrationDto} from '../../../dtos/registration-dto';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {SessionService} from '../../../services/session-service';
import {AsyncPipe, DatePipe} from '@angular/common';
import {MatTooltip} from '@angular/material/tooltip';
import {MainPageUserService} from '../../../services/main-page-user-service';
import {map} from 'rxjs';

@Component({
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatCardSubtitle,
    AsyncPipe,
    DatePipe,
  ],
  selector: 'app-main-page-session-component',
  styleUrl: './main-page-session-component.scss',
  templateUrl: './main-page-session-component.html',
})
export class MainPageSessionComponent {
  registration = input.required<RegistrationDto>();
  private readonly service = inject(MainPageUserService);
  protected readonly regData = computed(()=>this.service.GetRegData(this.registration()));
}
