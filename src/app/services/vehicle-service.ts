import {inject, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {VehicleDto} from '../dtos/vehicle-dto';
import {environment} from '../../environments/environment';

@Service()
export class VehicleService {
  httpClient = inject(HttpClient);

  GetVehicle(id: string){
    return this.httpClient.get<VehicleDto>(environment.ApiUrl+`Vehicle/byId/${id}`)
  }

  GetByClass(classId: string){
    return this.httpClient.get<VehicleDto[]>(environment.ApiUrl+`Vehicle/class/${classId}`);
  }
}
