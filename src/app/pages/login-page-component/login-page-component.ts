import { Component } from '@angular/core';
import {LoginFormComponent} from '../../components/forms/login-form-component/login-form-component';

@Component({
  imports: [
    LoginFormComponent
  ],
  selector: 'app-login-page-component',
  styleUrl: './login-page-component.scss',
  templateUrl: './login-page-component.html',
})
export class LoginPageComponent {}
