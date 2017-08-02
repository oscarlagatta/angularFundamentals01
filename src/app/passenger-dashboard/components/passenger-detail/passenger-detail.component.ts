import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Passenger} from '../../models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    template: `
        <div>
            <span 
            class="status"
            [class.checked-In]="detail.checkedIn"
            >
            </span>
            <div *ngIf="editing">
                 <input 
                type="text" 
                [value]="detail.fullname"
                (input)="onNameChanged(name.value)"
                #name>
            </div>
           
            <div *ngIf="!editing">
                {{detail.fullname }} 
            </div>
            <button (click)="toggleEdit()">
                {{ editing ? 'Done' : 'Edit'}}
            </button>
            <button (click)="onRemove()">
                Remove
            </button>
            <button (click)="gotToPassenger()">
                View
            </button>
            <!--div class="date">
            Check in Date: {{ detail.checkInDate ? (detail.checkedInDate | date: 'yMMMMd' | uppercase) : 'Not checked in'}}
            </div-->
        </div>
    `,
    styleUrls: ['passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnChanges, OnInit {

    @Input()
    detail: Passenger;

    @Output()
    edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    @Output()
    remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    @Output()
    view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    editing: boolean = false;

    // To avoid updating the parent when 
    // we start making changes, we use 
    // the onChanges life cycle hook to break the
    // binding between the parent and child 
    // component.
    // ngOnChanges gives us a changes object 
    ngOnChanges(changes){
        if ( changes.detail){
            this.detail = Object.assign({}, changes.detail.currentValue);
        }
        console.log('ngOnChanges');
    }
    
    ngOnInit() {
        console.log('ngOnInit');
    }
    
    onNameChanged(value: string){
        this.detail.fullname = value;
    }

    toggleEdit(){
        if (this.editing){
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }

    onRemove(){
        this.remove.emit(this.detail);        
    }

    gotToPassenger() {
        this.view.emit(this.detail);
    }
}