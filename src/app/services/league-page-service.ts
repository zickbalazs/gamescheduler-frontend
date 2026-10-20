import {inject, Service} from '@angular/core';
import {LeagueService} from './league-service';
import {SessionService} from './session-service';

@Service()
export class LeaguePageService {
  private readonly leagueService = inject(LeagueService);
  private readonly sessionService = inject(SessionService);
}
