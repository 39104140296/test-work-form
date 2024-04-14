import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { decimalPlacesValidator } from './validators/decimal-places.validator';
import { lettersAndSpacesValidator } from './validators/letters-and-spaces.validator';
import { MessageComponent } from './message/message.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    NgIf,
    MessageComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, lettersAndSpacesValidator()]),
    surname: new FormControl('', [Validators.required, lettersAndSpacesValidator()]),
    email: new FormControl('', [Validators.required, Validators.email]),
    workingExperience: new FormControl('', [
      Validators.required,
      decimalPlacesValidator(1)
    ])
  });

  formStatusMessage = '';
  messageType: 'info' | 'error' | 'success' = 'info';

  onSubmit() {
    if (this.userForm.valid) {
      this.formStatusMessage = 'Form submitted successfully!';
      this.messageType = 'success';
    } else {
      this.formStatusMessage = 'Please check the form for errors.';
      this.messageType = 'error';
    }
  }

  resetForm() {
    this.userForm.reset();
    this.formStatusMessage = 'Form has been cleared.';
    this.messageType = 'info';
  }
}