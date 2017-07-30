import { Component } from '@angular/core';
import { Passenger, Child } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template:`
    <div>
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
        <span 
          class="status"
          [class.checked-In]="passenger.checkedIn"
        ></span>
              {{ i }}: {{passenger.fullname }} 
        <div class="date">
          Check in Date: {{ passenger.checkInDate ? (passenger.checkedInDate | date: 'yMMMMd' | uppercase) : 'Not checked in'}}
        </div>
        <div> 
          Children: {{ passenger.children?.length || 0}}
        </div>
        <div>
        </div>
       </li>
      </ul>
    </div>
    `
})
export class PassengerDashboardComponent {

  passengers: Passenger[] = [
      {
        id: 1,
        fullname: 'Stephen',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null
      },
      {
        id: 2,
        fullname: 'Rose',
        checkedIn: false,
        checkInDate: 1491606000000,
        children: [{ name: 'Ted', age: 12}, {name: 'Chloe', age: 7}]
      },
      {
        id: 3,
        fullname: 'James',
        checkedIn: true,
        checkInDate: 14884128000000,
        children: null
      },
      {
        id: 4,
        fullname: 'Louis',
        checkedIn: true,
        checkInDate: null,
        children: [{name: 'Jessica', age: 1}]
      },
      {
        id: 5,
        fullname: 'Tina',
        checkedIn: false,
        checkInDate: null,
        children: null
      }
    ];
}