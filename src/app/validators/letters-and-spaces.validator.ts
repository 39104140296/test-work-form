import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function lettersAndSpacesValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null; // Don't validate empty value
    }
    const isValid = /^[a-zA-Z\u00C0-\u017F\s]*$/.test(control.value);
    return isValid ? null : { 'invalidCharacters': true };
  };
}