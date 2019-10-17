import { Injectable } from '@angular/core';
import { AbstractFlightService } from './abstract-flight.service';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Flight } from '../../../entities/flight';
import { CityFilter } from '../flight-search/flight-search.component';

@Injectable({
  providedIn: 'root'
})
export class DummyFlightService implements AbstractFlightService {
  flights: Flight[] = [];

  filter = new BehaviorSubject<CityFilter>({
    from: 'Hamburg',
    to: 'Graz'
  });


  constructor() { }

  public search(from: string, to: string): Observable<Flight[]> {
    return of([{
      id: 17,
      from: 'Graz',
      to: 'Hamburg',
      date: '2022-01-01',
      delayed: true
    }]);
  }

  public save(flight: Flight): Observable<Flight> {
    return of(flight);
  }

  public find(id: number): Observable<Flight> {
    let flight: Flight;
    flight = {
      id: id,
      from: 'Wien',
      to: 'Berlin',
      date: new Date().toISOString(),
      delayed: false
    };
    return of(flight);
  }
}
