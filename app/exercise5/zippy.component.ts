import {Component, Input} from "@angular/core";
@Component({
    selector : 'zippy',
    template : `
         <div class="panel panel-default">
            <div (click)="toggle()" class="toggle panel-heading">{{title}}<i class="glyphicon pull-right" [ngClass]="{'glyphicon-chevron-down': !isActive, 'glyphicon-chevron-up': isActive}"></i> </div>
            <ng-content class="panel-body" *ngIf="isActive"></ng-content>
        </div>

     `,
    styles: [`
       span {
        display: inline-block;     
       }
       .glyphicon {
            color: darkgrey;
       }
       .toggle {
            cursor:pointer;
       }
    `]
})
export class ZippyComponent {
    @Input() title = "Loading...";
    isActive = false;
    toggle() {
        this.isActive = !this.isActive;
    }
}