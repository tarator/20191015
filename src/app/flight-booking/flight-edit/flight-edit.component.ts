import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateCity, validateCityWithParams } from '../../shared/validators/validate-city';
import { validateRoundTrip } from '../../shared/validators/validate-round-trip';
import { Flight } from '../../../entities/flight';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {

  @Input()
  set flight(flight: Flight) {
    if(this.editForm) {
      this.editForm.patchValue(flight);
    }

  }

  constructor(private fb: FormBuilder) {
   }

   editForm: FormGroup;

  ngOnInit() {


    this.editForm = this.fb.group({
      id: [1, [Validators.required]],
      from: [
        'Hamburg',
        [
          Validators.required,
          Validators.minLength(3),
          validateCity
        ]
      ],
      to: [
        'Wien',
        [
          Validators.required,
          validateCityWithParams(['München', 'Berlin', 'Wien'])
        ]
        ],
      date: [(new Date().toISOString()), [Validators.required]]

    });


    // Gruppenvalidator
    this.editForm.validator = Validators.compose([this.editForm.validator, validateRoundTrip] );

    console.log('value', this.editForm.value);
    console.log('touched', this.editForm.touched);
    console.log('dirty', this.editForm.dirty);

    this.editForm.valueChanges.subscribe((value) => {
      console.log('value changed:', value);
    });

  }

}
