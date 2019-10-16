import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS, AsyncValidator } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { FlightService } from '../../flight-booking/services/flight.service';
import { map, delay } from 'rxjs/operators';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'input[cityWeb]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: CityWebValidatorDirective,
    multi: true
  }]
})
export class CityWebValidatorDirective implements AsyncValidator {

  constructor(private flightService: FlightService ) { }

  // tslint:disable-next-line:no-input-rename
  validCities = ['Graz', 'Wien'];

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    if (control && control.value) {
      // if (this.validCities.indexOf(control.value) === -1) {
      //   return of({
      //     cityWeb: {
      //       actualCity: control.value,
      //       validCities: this.validCities
      //     }

      //   });
      // }
      return this.flightService
                    .search(control.value, '')
                    .pipe(
                        map(flights =>
                            (flights.length > 0) ? {} : {cityWeb: true}
                        ),
                        delay(250) // <-- künstlicher Delay; kann später entfernt werden...
                    );
    }

    return of(null);
  }

}
