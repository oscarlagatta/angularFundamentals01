import { Component, OnInit, Input } from '@angular/core';
import { Passenger} from '../../models/passenger.interface';

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
        <form #form="ngForm" novalidate>
            {{detail | json}}
            <div>
                Passenger name: 
                <input 
                    type="text" 
                    name="fullname"
                    [ngModel]="detail?.fullname"> <!-- ? safe navigation operator -->
            </div>
            <div>
                Passenger ID: 
                <input 
                    type="number" 
                    name="id"
                    [ngModel]="detail?.id"> <!-- ? safe navigation operator -->
            </div>
            {{ form.value | json }}
        </form>
    `
})
export class PassengerFormComponent {
    @Input()
    detail: Passenger;

}