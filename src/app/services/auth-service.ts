import {computed, inject, Service, signal} from '@angular/core';
import {HttpClient, HttpErrorResponse, httpResource} from '@angular/common/http';
import {UserDataDto} from '../dtos/user-data-dto';
import {environment} from '../../environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';
import {catchError, of} from 'rxjs';
import {Router} from '@angular/router';

@Service()
export class AuthService {
  private httpClient = inject(HttpClient);
  private snackbar = inject(MatSnackBar);
  private router = inject(Router)

  private readonly userResource =
    httpResource<UserDataDto>(()=>({
      url: environment.ApiUrl+'User',
      method: 'GET',
      withCredentials: true
    }))
  readonly userData = computed(()=>{
    try {
      return this.userResource.value()
    }
    catch {
      let error = this.userResource.error() as HttpErrorResponse;
      if (error.status != 401)
        this.snackbar.open("An unknown error has occurred, try again later", undefined, {duration: 5000});
      return undefined;
    }
  });

  private logIn(form:{email:string, password: string}){
    return this.httpClient.post<null>(environment.ApiUrl+'login?useCookies=true', form, {withCredentials: true});
  }

  public tryLogin(form:{email:string, password: string}){
    this.logIn(form).pipe(catchError((x: HttpErrorResponse)=>of(x)))
      .subscribe(x=>{
        if (x == null){
          this.snackbar.open("Successful login!", undefined, {duration: 2000});
          this.userResource.reload();
          this.router.navigate(['/']);
        }
        else if (x?.status == 500)
          this.snackbar.open("An error has occurred during login.", undefined, {duration: 6000});
        else
          this.snackbar.open("Invalid credentials.", "OK");
      });
  }

}
