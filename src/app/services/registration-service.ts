import {computed, inject, Service} from '@angular/core';
import {HttpClient, httpResource} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {RegistrationDto} from '../dtos/registration-dto';

@Service()
export class RegistrationService {

  private readonly http = inject(HttpClient);


  getRegistrations(){
    return this.http.get<RegistrationDto[]>(environment.ApiUrl+'Registration', {withCredentials: true});
  }

  private readonly userRegsResource = httpResource<RegistrationDto[]>(()=>({
    url: environment.ApiUrl+'Registration',
    withCredentials: true,
    method: 'GET'
  }));

  userRegs = computed(()=>this.userRegsResource.value());

  hasRegs = computed(()=>{
    let resource = this.userRegsResource.value();
    if (resource){
      return resource.length>0;
    }
    return false;
  })
}
