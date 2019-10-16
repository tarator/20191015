import { Injectable } from '@angular/core';
import { FlightService } from './flight.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../../../entities/flight';


@Injectable({
  providedIn: 'root',
  useClass: FlightService,
  deps: [HttpClient]
})
export abstract class AbstractFlightService {

  abstract search(from: string, to: string): Observable<Flight[]>;
  abstract save(flight: Flight): Observable<Flight>;
}
