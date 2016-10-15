import {Component} from "@angular/core";
import {TweetsService} from "./tweets.service";
@Component({
    selector: 'tweet-component',
    template: `
        <div class="media" *ngFor="let tweet of tweets">
          <div class="media-left">
            <a href="#">
              <img class="media-object" src="{{tweet.image_url}}" alt="...">
            </a>
          </div>
          <div class="media-body">
            <div class="display-inline"><h5 class="media-heading">{{tweet.author}}</h5>&nbsp;<h6 class="text-muted">@{{tweet.username}}</h6></div>
            <small>{{tweet.tweet}}</small>
            <like-component [like]= "true" [likes]="tweet.totalVotes"></like-component>
          </div>
        </div>
    `,
    styles: [`
        .display-inline > h5, h6 {
            display: inline;
        }
    `]
})
export class TweetComponent {
    tweets;
    constructor(private tweetsService : TweetsService) {
        this.tweets = tweetsService.getTweets();
    }
}