import {Component, inject, input} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {LeagueCard} from '../../../models/league-card.model';
import {DatePipe} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {LeagueSessionsComponent} from '../league-sessions-component/league-sessions-component';

@Component({
  imports: [
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    DatePipe,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatCardHeader
  ],
  selector: 'app-league-card-component',
  styleUrl: './league-card-component.scss',
  templateUrl: './league-card-component.html',
})
export class LeagueCardComponent {
  league = input.required<LeagueCard>();
  dialogService = inject(MatDialog)

  ViewSessions(){
    this.dialogService.open(LeagueSessionsComponent, {data:this.league()});
  }
}
