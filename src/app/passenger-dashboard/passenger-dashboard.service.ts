import { Passenger } from './models/passenger.interface';

export class PassengerDashboardService {
    
    constructor() {}

    getPassengers(): Passenger[] {
        return [
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
}