import {computed, Service} from '@angular/core';
import {httpResource} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {RegistrationDto} from '../dtos/registration-dto';

@Service()
export class RegistrationService {
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
