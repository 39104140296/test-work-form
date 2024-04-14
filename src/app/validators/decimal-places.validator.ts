import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function decimalPlacesValidator(maxDecimalPlaces: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value === null || value === '') return null;
    const isNumber = !isNaN(parseFloat(value)) && isFinite(value);
    if (!isNumber) return { numberRequired: true };
    const decimalPlaces = (value.split('.')[1] || []).length;
    if (decimalPlaces > maxDecimalPlaces) return { maxDecimalPlaces: true };
    return null;
  };
}