import { Component, OnInit } from '@angular/core';
import { Flight } from '../../../entities/flight';
import { AbstractFlightService } from '../services/abstract-flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {



  from = 'Wien';
  to = 'Berlin';
  flights: Flight[];
  selectedFlight: Flight;
  message: string;

  basket: object = {
    '3': true,
    '8': true
  }



  constructor(private flightService: AbstractFlightService) { }

  ngOnInit() {
  }

  search() {
    this.flightService.search(this.from, this.to)
      .subscribe(
        flights => this.flights = flights,
        err => console.error('Error while fetching flights from API', err)
      );
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
