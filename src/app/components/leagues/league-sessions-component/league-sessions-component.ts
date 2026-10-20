import {Component, computed, inject, input, signal} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {MatCell, MatColumnDef, MatHeaderCell, MatHeaderRow, MatRow, MatTable} from '@angular/material/table';
import {SessionService} from '../../../services/session-service';
import {LeagueDto} from '../../../dtos/league-dto';
import {AsyncPipe, DatePipe} from '@angular/common';
import {LeagueCard} from '../../../models/league-card.model';
import {MatButton} from '@angular/material/button';
import {SelectCarComponent} from '../select-car-component/select-car-component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MainPageUserService} from '../../../services/main-page-user-service';

@Component({
  imports: [
    MatDialogContent,
    MatDialogTitle,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    AsyncPipe,
    MatRow,
    MatHeaderRow,
    DatePipe,
    MatButton
  ],
  selector: 'app-league-sessions-component',
  styleUrl: './league-sessions-component.scss',
  templateUrl: './league-sessions-component.html',
})
export class LeagueSessionsComponent {
  dialog = inject(MatDialog);
  snackbar = inject(MatSnackBar);
  league: LeagueCard = inject(MAT_DIALOG_DATA);
  sessionService = inject(SessionService);

  leagueId = signal(this.league.id);
  sessions = computed(()=>this.sessionService.GetAvailableSessions(this.leagueId()));

  RegisterToSession(sessionId: string){
    let ref = this.dialog.open(SelectCarComponent, {data: this.league.classes});
    ref.afterClosed().subscribe(x=>{
      if (x)
        this.sessionService.RegisterToSession(sessionId, x).subscribe(x=>{
          this.leagueId.set('')
          this.leagueId.set(this.league.id);
          this.snackbar.open("Successful registration!", "OK")
        })
    })
  }
}
