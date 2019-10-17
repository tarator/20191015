import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { StatusToggleComponent } from './status-toggle/status-toggle.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    StatusToggleComponent,
    FlightEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SharedModule,
    FlightSearchComponent,
    FlightEditComponent
  ]
})
export class FlightBookingModule { }
