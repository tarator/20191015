import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'input[city]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CityValidatorDirective,
    multi: true
  }]

})
export class CityValidatorDirective implements Validator {

  // tslint:disable-next-line:no-input-rename
  @Input('city') validCities: string[];

  validate(control: AbstractControl): ValidationErrors | null {
    if (control && control.value) {
      if (this.validCities.indexOf(control.value) === -1) {
        return {
          city: {
            actualCity: control.value,
            validCities: this.validCities
          }
        };
      }
    }

    return null;
  }

  constructor() { }

}
