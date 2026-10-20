import {computed, inject, Service, signal} from '@angular/core';
import {HttpClient, HttpErrorResponse, httpResource} from '@angular/common/http';
import {UserDataDto} from '../dtos/user-data-dto';
import {environment} from '../../environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';
import {catchError, of} from 'rxjs';
import {Router} from '@angular/router';
import {RegistrationForm} from '../models/registration-form.model';
import {ValidationException} from '../dtos/exceptions/validation-exception';

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
  private logout = this.httpClient.get<null>(environment.ApiUrl+'User/logout', {withCredentials: true})
  private registration(form: RegistrationForm){
    return this.httpClient.post<null>(environment.ApiUrl+"User/register", form);
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

  public tryLogout(){
    this.logout.subscribe(x=>{
      this.userResource.reload();
      this.snackbar.open("You have logged out.", undefined, {duration: 2500})
    })
  }

  private handleReg(){
    this.snackbar.open("Successful registration!")
    this.router.navigate(["/login"]);
  }

  private handleRegError(err: ValidationException){
    if (err.status == 500)
      this.snackbar.open("A server error has occurred, try again later", undefined, {duration: 7500})
    else{
      let msg = Object.values(err.errors)[0].join('')
      this.snackbar.open(msg, undefined, {duration: 3000})
    }
  }

  public tryRegistration(form: RegistrationForm, passAgain: string){
    if (form.password != passAgain)
    {
      this.snackbar.open("Passwords do not match!", undefined, {duration: 2000})
      return;
    }
    this.registration(form).pipe(catchError(x=>of(x.error as ValidationException)))
      .subscribe(x=>{
        if (x != null && 'errors' in x) {
          this.handleRegError(x);
          return;
        }
        this.handleReg();
    })
  }

}
