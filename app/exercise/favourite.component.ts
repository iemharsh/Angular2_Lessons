
import {Component, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'favourite-component',
    template : `
        <div>
            <i class="glyphicon" [class.glyphicon-star]="isActive" [class.glyphicon-star-empty]="!isActive" (click)="toggle($event)"></i>
        </div>
    `

})
export class FavouriteComponent {
    isActive = true;

    @Output() change = new EventEmitter();
    toggle($event) {
        event.stopPropagation();
        this.isActive = this.isActive == true ? false : true;
        this.change.emit({newValue: this.isActive});
    }


}