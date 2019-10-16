import { Pipe, PipeTransform } from '@angular/core';
import { of, Observable } from 'rxjs';

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {

  transform(value: string, fmt: string): Observable<string> {
    let short: string, long: string;
    long = value;
    short = value;
    switch (value) {
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
        break;
        case 'Wien':
            short = 'VIE';
            long = 'Flughafen Wien Schwechat';
            break;
    }
    if (fmt === 'short') {
      return of(short);
    }
    return of(long);
  }

}
