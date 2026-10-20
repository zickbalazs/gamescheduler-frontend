import {computed, inject, runInInjectionContext, Service, Signal, signal} from '@angular/core';
import {httpResource} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {SessionDto} from '../dtos/session-dto';
import {SessionService} from './session-service';
import {catchError, map, of, switchMap} from 'rxjs';
import {LeagueService} from './league-service';
import {VehicleService} from './vehicle-service';
import {RegistrationDto} from '../dtos/registration-dto';
import {RegistrationService} from './registration-service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Service()
export class MainPageUserService {
  snackbar = inject(MatSnackBar)
  sessionService = inject(SessionService);
  leagueService = inject(LeagueService);
  regService = inject(RegistrationService)
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
  UnregisterFromSession(sessionId: string){
    return this.sessionService
      .UnregisterSession(sessionId)
      .pipe(
        map(()=>{this.snackbar.open("Successful unregistration", "OK"); return true}),
        catchError(()=>{this. snackbar.open("Unsuccessful unregistration", "OK"); return of(false)})
      );
  }
}
