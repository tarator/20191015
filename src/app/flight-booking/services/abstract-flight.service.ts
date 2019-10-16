import { Injectable } from '@angular/core';
import { FlightService } from './flight.service';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Flight } from '../../../entities/flight';
import { CityFilter } from '../flight-search/flight-search.component';


@Injectable({
  providedIn: 'root',
  useClass: FlightService,
  deps: [HttpClient]
})
export abstract class AbstractFlightService {
  abstract flights: Flight[] = [];

  abstract filter = new BehaviorSubject<CityFilter>({
    from: 'Hamburg',
    to: 'Graz'
  });
  abstract search(from: string, to: string): Observable<Flight[]>;
  abstract save(flight: Flight): Observable<Flight>;

}
