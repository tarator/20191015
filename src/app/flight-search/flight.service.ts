import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Flight } from '../../entities/flight';
import { Observable } from 'rxjs';
import { AbstractFlightService } from './abstract-flight.service';

@Injectable({
  providedIn: 'root'
})
export class FlightService implements AbstractFlightService {

  constructor(private http: HttpClient) { }

  public search(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';
    const httpHeaders = new HttpHeaders().set('Accept', 'application/json');
    const httpParams =
      new HttpParams()
        .set('from', from)
        .set('to', to);
    return this.http.get<Flight[]>(url, {headers: httpHeaders, params: httpParams});
  }

  public save(flight: Flight): Observable<Flight> {
    const url = 'http://www.angular.at/api/flight';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http
      .post<Flight>(url, flight, { headers });
  }
}
