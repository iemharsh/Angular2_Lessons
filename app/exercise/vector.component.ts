import {Component, Output, Input, EventEmitter} from "@angular/core";


@Component({
    selector: 'vector-component',
    template: `
    <div style="width: 20px">
         <i class="glyphicon glyphicon-menu-up" (click)="upVote()" [class.vote]="voteCount == 1 ? true : false"></i>
         <span>{{totalVotes}}</span>
         <i class="glyphicon glyphicon-menu-down" (click)="downVote()" [class.vote]="voteCount == -1 ? true : false"></i>         
    </div>      
    `,
    styles: [`
        .glyphicon {
            cursor: pointer;
        }
        i:hover {
            color: darkorange;
        }
        .vote {
            color:orange;
        }
    `]
})
export class VectorComponent {
    @Input() totalVotes = 10;
    @Input() voteCount = 0;

    @Output() vote = new EventEmitter();
    upVote() {
        if(this.voteCount == 0 || this.voteCount == -1) {
            this.voteCount = 1;
            this.totalVotes+=this.voteCount;
            this.vote.emit({vote: this.voteCount});
        }
    }
    downVote() {
        if(this.voteCount == 0 || this.voteCount == 1) {
            this.voteCount = -1;
            this.totalVotes+=this.voteCount;
            this.vote.emit({vote: this.voteCount});
        }
    }


}