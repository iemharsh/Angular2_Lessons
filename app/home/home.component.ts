import {Component} from "@angular/core";
@Component({
    selector: 'home',
    template: `
    <div>I am the home component</div>
    <widget-one *ngIf="selected"></widget-one>
    <widget-two></widget-two>
    `
})

export class HomeComponent {
    private _selected = true;
}