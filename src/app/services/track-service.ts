import {inject, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {TrackDto} from '../dtos/track-dto';

@Service()
export class TrackService {
  private http = inject(HttpClient)

  GetTrack(trackId: string){
    return this.http.get<TrackDto>(environment.ApiUrl+`Track/${trackId}`);
  }
}
