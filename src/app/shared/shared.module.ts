import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import { StatusColorPipe } from './pipes/status-color.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightBookingModule } from '../flight-booking/flight-booking.module';
import { CityValidatorDirective } from './validators/city-validator.directive';
import { CityWebValidatorDirective } from './validators/city-web-validator.directive';



@NgModule({
  declarations: [
    CityPipe,
    StatusColorPipe,
    CityValidatorDirective,
    CityWebValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CityPipe,
    StatusColorPipe,
    FormsModule,
    ReactiveFormsModule,
    CityValidatorDirective,
    CityWebValidatorDirective
  ]
})
export class SharedModule { }
