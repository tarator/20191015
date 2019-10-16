import { Component, OnInit } from '@angular/core';
import { Flight } from '../../../entities/flight';
import { AbstractFlightService } from '../services/abstract-flight.service';
import { tap, first } from 'rxjs/operators';


export interface CityFilter {
  from: string;
  to: string;
}

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {



  from: string;
  to: string;
  // flights: Flight[];
  selectedFlight: Flight;
  message: string;

  basket: object = {
    '3': true,
    '8': true
  }

  get flights() {
    return this.flightService.flights;
  }



  constructor(private flightService: AbstractFlightService) { }

  ngOnInit() {

    this.flightService.filter.pipe(
      tap(cityFilter => console.log('City Filter', cityFilter)),
      first()
    ).subscribe(
      cityFilter => {
        this.from = cityFilter.from;
        this.to = cityFilter.to;
      }
    );
  }

  updateFilter(): void {
    this.flightService.filter.next({
      from: this.from,
      to: this.to
    });
  }

  search() {
    this.flightService.search(this.from, this.to).subscribe();
    this.updateFilter();
  }

  select(f: Flight) {
    this.selectedFlight = f;
  }

  save() {

      this.flightService.save(this.selectedFlight).subscribe(
        flight => {
        this.selectedFlight = flight;
        this.message = 'Flug erstellt.';
        this.search();

        },
        error => this.message = error
      );
  }



}
