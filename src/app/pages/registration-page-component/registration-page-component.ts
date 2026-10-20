import { Component } from '@angular/core';
import {
  RegistrationFormComponent
} from '../../components/forms/registration-form-component/registration-form-component';

@Component({
  imports: [
    RegistrationFormComponent
  ],
  selector: 'app-registration-page-component',
  styleUrl: './registration-page-component.scss',
  templateUrl: './registration-page-component.html',
})
export class RegistrationPageComponent {}
