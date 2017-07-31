import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Passenger } from './models/passenger.interface';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


// Promise
import 'rxjs/add/operator/toPromise';

// Error
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const PASSENGER_API: string = 'http://localhost:3004/passengers';


@Injectable()
export class PassengerDashboardService {

    constructor(private http: Http) {
    }

    // getPassengers using Promise
    getPassengersPromise(): Promise<Passenger[]> {
        return this.http
            .get(PASSENGER_API)
            .toPromise()
            .then((response: Response) => response.json());
    }
    getPassengers(): Observable<Passenger[]> {
        return this.http
          .get(PASSENGER_API)
          .map( (response: Response) => response.json())
          .catch((error: any) => Observable.throw(error.json()));
    }

    // updatePassenger with Promise
    updatePassengerPromise(passenger: Passenger): Promise<Passenger> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({
            headers: headers
        });
        return this.http
          .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
          .toPromise()
          .then( (response: Response) => response.json());
    }


    updatePassenger(passenger: Passenger): Observable<Passenger> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({
            headers: headers
        });
        return this.http
          .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
          .map( (response: Response) => response.json())
          .catch((error: any) => Observable.throw(error.json()));
    }

    // removePassenger with Promise
    removePassengerPromise(passenger: Passenger): Promise<Passenger> {
        return this.http
          .delete(`${PASSENGER_API}/${passenger.id}`)
          .toPromise()
          .then( (response: Response) => response.json());
    }

    removePassenger(passenger: Passenger): Observable<Passenger> {
        return this.http
          .delete(`${PASSENGER_API}/${passenger.id}`)
          .map( (response: Response) => response.json())
          .catch((error: any) => Observable.throw(error.json()));
    }

    
}