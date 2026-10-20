import {inject, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SessionDto} from '../dtos/session-dto';
import {environment} from '../../environments/environment';

@Service()
export class SessionService {
  private readonly http = inject(HttpClient);

  GetSession(sessionId: string){
    return this.http.get<SessionDto>(environment.ApiUrl+`Session/byId/${sessionId}`);
  }
  GetAvailableSessions(leagueId: string){
    return this.http.get<SessionDto[]>(environment.ApiUrl+`Session/league/available/${leagueId}`)
  }
  RegisterToSession(sessionId: string, carId: string){
    return this.http.post(environment.ApiUrl+`Session/register/${sessionId}`, {carId}, {withCredentials: true});
  }
}
