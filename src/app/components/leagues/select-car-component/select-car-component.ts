import {Component, computed, inject, signal} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatStep, MatStepContent, MatStepLabel, MatStepper} from '@angular/material/stepper';
import {MatFormField, MatLabel} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatButton} from '@angular/material/button';
import {VehicleService} from '../../../services/vehicle-service';
import {AsyncPipe} from '@angular/common';

@Component({
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatStepper,
    MatStep,
    MatStepLabel,
    MatFormField,
    MatSelect,
    MatLabel,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    MatStepContent,
    MatOption,
    AsyncPipe
  ],
  selector: 'app-select-car-component',
  styleUrl: './select-car-component.scss',
  templateUrl: './select-car-component.html',
})
export class SelectCarComponent {
  carService = inject(VehicleService);
  classes: string[] = inject(MAT_DIALOG_DATA);
  selectedCarId = '';
  selectedClassId = signal('');
  classCars = computed(()=>this.carService.GetByClass(this.selectedClassId()));
  UpdateSelection(e: string){
    this.selectedClassId.set(e);
  }

}
