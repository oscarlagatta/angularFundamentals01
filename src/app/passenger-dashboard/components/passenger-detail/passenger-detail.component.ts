import { Component, Input, Output, EventEmitter } from '@angular/core';
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
            <!--div class="date">
            Check in Date: {{ detail.checkInDate ? (detail.checkedInDate | date: 'yMMMMd' | uppercase) : 'Not checked in'}}
            </div-->
            <div class="children"> 
            Children: {{ detail.children?.length || 0}}
            </div>
        </div>
    `,
    styleUrls: ['passenger-detail.component.scss']
})
export class PassengerDetailComponent {

    @Input()
    detail: Passenger;

    @Output()
    edit: EventEmitter<any> = new EventEmitter();

    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    editing: boolean = false;
    
    
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
}