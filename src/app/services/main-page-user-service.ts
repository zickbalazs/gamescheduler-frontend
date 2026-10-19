import {computed, inject, runInInjectionContext, Service, Signal, signal} from '@angular/core';
import {httpResource} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {SessionDto} from '../dtos/session-dto';
import {SessionService} from './session-service';
import {map, of, switchMap} from 'rxjs';
import {LeagueService} from './league-service';
import {VehicleService} from './vehicle-service';
import {RegistrationDto} from '../dtos/registration-dto';

@Service()
export class MainPageUserService {
  sessionService = inject(SessionService);
  leagueService = inject(LeagueService);
  vehicleService = inject(VehicleService);
  GetRegData(reg: RegistrationDto) {
    return this.sessionService
      .GetSession(reg.sessionId).pipe(switchMap(session=>
        this.leagueService.GetLeague(session.leagueId).pipe(switchMap(league=>
          this.vehicleService.GetVehicle(reg.carId).pipe(map(car=>{
            return {
              name: league.name,
              start: session.start,
              car: `${car.manufacturer} ${car.model}`.trim(),
              canConnect: session.status == 3 && reg.locked
            }
          }))
        ))
      ))
  }
}
