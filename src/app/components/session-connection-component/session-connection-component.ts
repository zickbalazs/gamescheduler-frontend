import {Component, computed, inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';
import {SessionService} from '../../services/session-service';
import {AsyncPipe} from '@angular/common';
import {MatButton} from '@angular/material/button';

@Component({
  imports: [
    MatDialogTitle,
    MatDialogContent,
    AsyncPipe,
    MatDialogActions,
    MatButton,
    MatDialogClose
  ],
  selector: 'app-session-connection-component',
  styleUrl: './session-connection-component.scss',
  templateUrl: './session-connection-component.html',
})
export class SessionConnectionComponent {
  sessionId: string = inject(MAT_DIALOG_DATA);
  sessionService = inject(SessionService);

  sessionDetails = computed(()=>this.sessionService.GetSessionConnection(this.sessionId));


}
