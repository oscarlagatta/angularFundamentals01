import { Component } from '@angular/core';

interface Child {
  name: string;
  age: number;
}

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate: number | null;
  children: Child[] | null;
}

@Component({
  selector: 'app-root',
  template: `
    <div class="app">

      <!--h3>Airline Passengers</h3>
      <ul>
        <template ngFor let-passenger let-i="index" [ngForOf]="passengers">
          <li >
              <div>
                {{ i }}: {{passenger.fullname }} 
              </div>
          </li>
        </template>
      </ul-->
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
        <span 
          class="status"
          [class.checked-In]="passenger.checkedIn"
        ></span>
              {{ i }}: {{passenger.fullname }} 
        <!--div>
          {{ passenger | json }}
        </div-->
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
      <!--h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
        <span 
          class="status"
          [ngClass]="{
            'checked-In': passenger.checkedIn,
            'checked-Out': !passenger.checkedIn
          }"
        ></span>
              {{ i }}: {{passenger.fullname }} 
        </li>
      </ul-->
      <!--h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
        <span 
          class="status"
          [style.backgroundColor]="(passenger.checkedIn ? '#2ecc71': '#c0392b')"
        ></span>
              {{ i }}: {{passenger.fullname }} 
        </li>
      </ul-->
      <!--h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
        <span 
          class="status"
          [ngStyle]="{ backgroundColor: (passenger.checkedIn ? '#2ecc71': '#c0392b')}"
        ></span>
              {{ i }}: {{passenger.fullname }} 
        </li>
      </ul-->
      <!--button (click)="handleClick(username.value)">Get Value</button>
      <input 
        type="text" 
        [value]="name"
        (input)="handleChange($event.target.value)"/>
      
        <template [ngIf]="name.length > 2">
          <div>
              Searching for... {{ name }}  
          </div>
        </template>

        <div *ngIf="name.length > 2">
          Searching for... {{ name }}
        </div-->

      </div>`,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

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
  // name: string = "Oscar Lagatta";
  // handleClick(value: string) {
  //    console.log(value);
  //  }
  // handleChange(value: string){
  //     this.name = value;
  // }
}
