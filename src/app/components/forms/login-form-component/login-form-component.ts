import {Component, inject} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent} from '@angular/material/card';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {AuthService} from '../../../services/auth-service';
import {FormsModule} from '@angular/forms';

@Component({
  imports: [
    MatCard,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatInput,
    MatCardActions,
    MatButton,
    MatIcon,
    FormsModule
  ],
  selector: 'app-login-form-component',
  styleUrl: './login-form-component.scss',
  templateUrl: './login-form-component.html',
})
export class LoginFormComponent {
  authService = inject(AuthService);

  form = {
    email: '',
    password: ''
  };

  Login(){
    this.authService.tryLogin(this.form)
  }


}
