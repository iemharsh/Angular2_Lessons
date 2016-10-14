import {Component} from "@angular/core";
@Component({
    selector: 'home',
    template: `
    <div>I am the home component</div>
    <h2>Favourite Component</h2><favourite-component (change)="onChange($event)"></favourite-component>
    <h2>Like Component</h2><like-component [like]=""></like-component>
    <h2>Vector Component</h2><vector-component (vote)="updateVotes($event)"></vector-component>
    `,
})


export class HomeComponent {
    private selected = true;
    onChange($event) {

        console.log('Event On!.!.!>!!>>!');
        console.log($event);


    }

    updateVotes($event) {
        console.log($event);
    }


}