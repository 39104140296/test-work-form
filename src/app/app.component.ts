import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, AbstractControl, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';
import { NgIf } from '@angular/common';
import { decimalPlacesValidator } from './validators/decimal-places.validator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular Form';

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    workingExperience: new FormControl('', [
      Validators.required,
      decimalPlacesValidator(1)
    ])
  });

  onSubmit() {
    console.log(this.userForm.value);
  }

  resetForm() {
    this.userForm.reset();
  }
}
