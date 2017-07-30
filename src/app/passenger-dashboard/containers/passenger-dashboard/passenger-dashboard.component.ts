import { Component, OnInit } from '@angular/core';
import { Passenger, Child } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template:`
    <div>
      <passenger-count
        [items]="passengers"
        >
      </passenger-count>
      <passenger-detail 
        *ngFor="let passenger of passengers;"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)">
      </passenger-detail>
    </div>
    `
})
export class PassengerDashboardComponent implements OnInit {

  passengers: Passenger[];
  
  ngOnInit(){
    console.log('ngOnInit');
    this.passengers = [
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
  
  handleRemove(event: Passenger){
    this.passengers = this.passengers.filter((passenger: Passenger) => {
        return passenger.id !== event.id;
    });  
    console.log(event);
  }

  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      // detects if we are in the current passenger that has been 
      // fired from the handleEdit event; takes the original 
      // passenger object and merges the latest changes of the 
      // event in.
      if (passenger.id === event.id){
          // we use an immutable operation 
          passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
    console.log(this.passengers);
  }
}