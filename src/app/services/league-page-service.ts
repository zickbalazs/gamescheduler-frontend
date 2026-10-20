import {inject, Service} from '@angular/core';
import {LeagueService} from './league-service';
import {SessionService} from './session-service';
import {forkJoin, from, map, mergeMap, Observable, of, switchMap, toArray} from 'rxjs';
import {LeagueDto} from '../dtos/league-dto';
import {TrackService} from './track-service';
import {LeagueCard} from '../models/league-card.model';

@Service()
export class LeaguePageService {
  private readonly leagueService = inject(LeagueService);
  private readonly sessionService = inject(SessionService);
  private readonly trackService = inject(TrackService);

  getLeagueCardData(): Observable<LeagueCard[]>{
    return this.leagueService
      .GetLeagues()
      .pipe(switchMap(leagues=>
        from(leagues)
          .pipe(mergeMap(x=>this.trackService.GetTrack(x.currentTrackId).pipe(switchMap(track=>{
            return this.sessionService.GetAvailableSessions(x.id).pipe(map(sessions=>{
              return {
                id: x.id,
                name: x.name,
                trackName: track.name,
                classes: x.currentClassIds,
                start: x.start,
                end: x.end,
                hasActive: sessions.length>0
              }
            }))
          })))
      )),
      toArray())
  }
}


