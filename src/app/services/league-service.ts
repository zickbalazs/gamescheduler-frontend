import {computed, inject, Service, signal} from '@angular/core';
import {HttpClient, httpResource} from '@angular/common/http';
import {LeagueDto} from '../dtos/league-dto';
import {environment} from '../../environments/environment';
import {map} from 'rxjs';

@Service()
export class LeagueService {
  private readonly httpClient = inject(HttpClient);

  GetLeague(leagueId: string){
    return this.httpClient.get<LeagueDto>(environment.ApiUrl+`League/${leagueId}`);
  }

  GetLeagues(){
    return this.httpClient.get<LeagueDto[]>(environment.ApiUrl+'League');
  }

}
