import {Component} from "@angular/core";
@Component({
    selector: 'home',
    template: `
    <div>I am the home component</div>
    <h4>Favourite Component</h4><favourite-component (change)="onChange($event)"></favourite-component>
    <h4>Like Component</h4><like-component [like]=""></like-component>
    <h4>Vector Component</h4><vector-component (vote)="updateVotes($event)"></vector-component>
    <h4>Tweets Component</h4><tweet-component></tweet-component>
    <h4>Zippy Component</h4><zippy title="First Zip">This is a Zippy Component</zippy>
    
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