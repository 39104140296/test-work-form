import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { decimalPlacesValidator } from './validators/decimal-places.validator';
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
    name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\u00C0-\u017F\s]+$/)]),
    surname: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\u00C0-\u017F\s]+$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    workingExperience: new FormControl('', [
      Validators.required,
      decimalPlacesValidator(1)
    ])
  });

  formStatusMessage = '';
  messageType: 'info' | 'error' | 'success' = 'info';

  nameTouched = false;
  surnameTouched = false;
  emailTouched = false;
  workingExperienceTouched = false;

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
    this.nameTouched = false;
    this.surnameTouched = false;
    this.emailTouched = false;
    this.workingExperienceTouched = false;
  }
}
