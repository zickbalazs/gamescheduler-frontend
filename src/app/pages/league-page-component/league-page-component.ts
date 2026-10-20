import {Component, computed, inject} from '@angular/core';
import {LeaguePageService} from '../../services/league-page-service';
import {AsyncPipe} from '@angular/common';

@Component({
  imports: [
    AsyncPipe
  ],
  selector: 'app-league-page-component',
  styleUrl: './league-page-component.scss',
  templateUrl: './league-page-component.html',
})
export class LeaguePageComponent {
  leaguePageService = inject(LeaguePageService);
  leagues = computed(()=>this.leaguePageService.getLeagueCardData());
}
