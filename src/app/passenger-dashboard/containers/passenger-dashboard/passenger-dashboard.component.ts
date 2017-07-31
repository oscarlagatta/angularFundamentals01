import { Component, OnInit } from '@angular/core';
import { Passenger, Child } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template:`
    <div>
      <passenger-count
        [items]="passengers"
        >
      </passenger-count>
      <div *ngFor="let passenger of passengers;">
        {{ passenger.fullname}}
      </div>
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

  constructor(private passengerService: PassengerDashboardService) {
  }
  
  ngOnInit(){
    // get the data from the service
    this.passengerService
        .getPassengers()
        .subscribe((data: Passenger[]) => this.passengers = data);
  }
  
  handleRemove(event: Passenger){

    this.passengerService
      .removePassenger(event)
      .subscribe((data: Passenger)=> {
          this.passengers = this.passengers.filter((passenger: Passenger) => {
                return passenger.id !== event.id;
      })
    });  
  }

  handleEdit(event: Passenger) {

    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
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
      });
  }
}