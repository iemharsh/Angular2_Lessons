import {Component, EventEmitter, Input} from "@angular/core";


@Component({
    selector: 'like-component',
    template: `
        <div>
            <i class="glyphicon glyphicon-heart" (click)="updateLikes()" [class.liked]="like" [class.notliked]="!like"></i> {{likes}}
            
        </div>
    `,
    styles: [`
        .notliked {
            color: lightgray;
        }
        .liked {
            color: deeppink;
        }
        .glyphicon {
            cursor: pointer;
        }
    `]
})
export class LikeComponent {
    @Input() likes:number = 0;
    @Input() like = false;
    constructor() { }

    updateLikes() {
        if(this.like == true) {
            this.like = !this.like;
            this.likes--;
        } else {
            this.like = !this.like;
            this.likes++;
        }
    }

}