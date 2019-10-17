import { ValidationErrors, AbstractControl, ValidatorFn } from "@angular/forms";

/**
 * This is a simple validator function.
 * @param control
 */
export function validateCity(control: AbstractControl): ValidationErrors | null {
  const validCities = ['Wien', 'Hamburg'];
  if (validCities.indexOf(control.value) === -1) {
    return {
      city: {
        actualCity: control.value,
        validCities: validCities
      }
    };
  }
  return null;
}

export function validateCityWithParams(validCities: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (validCities.indexOf(control.value) === -1) {
      return {
        city: {
          actualCity: control.value,
          validCities: validCities
        }
      };
    }
    return null;
  }
}
