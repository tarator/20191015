import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import { StatusColorPipe } from './pipes/status-color.pipe';
import { FormsModule } from '@angular/forms';
import { FlightBookingModule } from '../flight-booking/flight-booking.module';



@NgModule({
  declarations: [
    CityPipe,
    StatusColorPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CityPipe,
    StatusColorPipe,
    FormsModule
  ]
})
export class SharedModule { }
