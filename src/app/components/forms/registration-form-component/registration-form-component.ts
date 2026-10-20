import {Component, inject} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {RegistrationForm} from '../../../models/registration-form.model';
import {AuthService} from '../../../services/auth-service';
import {FormsModule} from '@angular/forms';

@Component({
  imports: [
    MatCardContent,
    MatCard,
    MatCardActions,
    MatButton,
    MatIcon,
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule
  ],
  selector: 'app-registration-form-component',
  styleUrl: './registration-form-component.scss',
  templateUrl: './registration-form-component.html',
})
export class RegistrationFormComponent {
  private readonly authService = inject(AuthService);

  protected form: RegistrationForm = {
    userName: '',
    steamId: '',
    email: '',
    password: ''
  };
  protected passAgain = '';

  protected TryRegistration(){
    this.authService.tryRegistration(this.form, this.passAgain);
  }

}
