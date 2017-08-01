import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Passenger} from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';
@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
        <!-- we use template reference #form -->
        <form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate>
            
            <div>
                Passenger name: 
                <!-- we can also use template reference in the input element 
                    #fullname and we export like ngForm we export ngModel
                    does also keep track validation state -->
                <input 
                    type="text" 
                    name="fullname"
                    required
                    #fullname="ngModel"                     
                    [ngModel]="detail?.fullname"> <!-- ? safe navigation operator -->
                    <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
                        Passenger name is required
                    </div>
            </div>
            <div>
                Passenger ID: 
                <input 
                    type="number" 
                    name="id"
                    required
                    #id='ngModel'
                    [ngModel]="detail?.id"> <!-- ? safe navigation operator -->
                    <!-- id.touched can be used instead of id.dirty depends on 
                         the validation strategy -->
                    <div *ngIf="id.errors?.required && id.dirty" class="error">
                        Passenger ID is required
                    </div>
            </div>
            <div>
                <label>
                    Checked In: 
                    <input type="checkbox"
                        name="checkedIn"
                        [ngModel]="detail?.checkedIn"
                        (ngModelChange)="toggleCheckIn($event)">
                </label>
            </div>

            <div *ngIf="form.value.checkedIn">
                Check in date:
                <input 
                    type="number"
                    name="checkInDate"
                    [ngModel]="detail?.checkInDate">

            </div>
            <div>
                Luggage:
                <select
                    name="baggage"
                    [ngModel]="detail?.baggage"
                    >
                    <option *ngFor="let item of baggage" 
                            [value]="item.key"
                            [selected]="item.key === detail?.baggage">
                             {{ item.value }}   
                    </option>
                </select>
            </div>
            <button type="submit" [disabled]="form.invalid">
                Update passenger
            </button>
        </form>
    `
})
export class PassengerFormComponent {
    
    @Input()
    detail: Passenger;

    @Output()
    update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    baggage: Baggage[] = [{
        key: 'none',
        value: 'No baggage'
    },
    {
        key: 'hand-only',
        value: 'Hand baggage'
    },
    {
        key: 'hold-only',
        value: 'Hold baggage'
    },
    {
        key: 'hand-hold',
        value: 'Hand and Hold baggage'
    }];

    toggleCheckIn(checkedIn: boolean){
        if(checkedIn) {
            this.detail.checkInDate = Date.now();
        }
    }

    handleSubmit(passenger: Passenger, isValid: boolean){
        if(isValid){
            this.update.emit(passenger);    
        }
    }
}