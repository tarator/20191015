import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Flight } from '../../../entities/flight';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AbstractFlightService } from './abstract-flight.service';
import { CityFilter } from '../flight-search/flight-search.component';

@Injectable({
  providedIn: 'root'
})
export class FlightService implements AbstractFlightService {

  flights: Flight[] = [];

  filter = new BehaviorSubject<CityFilter>({
    from: 'Hamburg',
    to: 'Graz'
  });

  constructor(private http: HttpClient) { }

  public search(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';
    const httpHeaders = new HttpHeaders().set('Accept', 'application/json');
    const httpParams =
      new HttpParams()
        .set('from', from)
        .set('to', to);
    return this.http.get<Flight[]>(url, {headers: httpHeaders, params: httpParams})
      .pipe(tap(flights => this.flights = flights));
  }

  public save(flight: Flight): Observable<Flight> {
    const url = 'http://www.angular.at/api/flight';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http
      .post<Flight>(url, flight, { headers });
  }
}
