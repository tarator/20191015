import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateCity, validateCityWithParams } from '../../shared/validators/validate-city';
import { validateRoundTrip } from '../../shared/validators/validate-round-trip';
import { Flight } from '../../../entities/flight';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { tap, switchMap } from 'rxjs/operators';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {

  @Input()
  set flight(flight: Flight) {
    if (this.editForm) {
      this.editForm.patchValue(flight);
    }
  }

  id: number;
  showDetail: boolean;

  flightObs: Observable<Flight>;
  constructor(
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private flightService: FlightService) {
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

   this.flightObs = this.router.paramMap.pipe(
      tap((params: ParamMap) => {
          this.id = +params.get('id');
          this.showDetail = !!params.get('showDetail');
        }
      ),
      switchMap((params) => this.flightService.find(+params.get('id'))),
      tap((flight: Flight) => {
        this.editForm.patchValue(flight);
      })
    );

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
