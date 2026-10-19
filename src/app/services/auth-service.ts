import {computed, inject, Service} from '@angular/core';
import {HttpClient, httpResource} from '@angular/common/http';
import {UserDataDto} from '../dtos/user-data-dto';
import {environment} from '../../environments/environment';

@Service()
export class AuthService {
  private httpClient = inject(HttpClient);

  private readonly userResource =
    httpResource<UserDataDto>(()=>({
      url: environment.ApiUrl+'User',
      method: 'GET',
      withCredentials: true
    }))

  readonly userLoggedIn = computed(()=>this.userResource.value() != undefined);
  readonly userData = computed(()=>this.userResource.value());


}
