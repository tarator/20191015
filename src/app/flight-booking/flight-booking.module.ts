import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';



@NgModule({
  declarations: [
    FlightSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SharedModule,
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
