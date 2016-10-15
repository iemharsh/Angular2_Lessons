"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var tweets_service_1 = require("./tweets.service");
var TweetComponent = (function () {
    function TweetComponent(tweetsService) {
        this.tweetsService = tweetsService;
        this.tweets = tweetsService.getTweets();
    }
    TweetComponent = __decorate([
        core_1.Component({
            selector: 'tweet-component',
            template: "\n        <div class=\"media\" *ngFor=\"let tweet of tweets\">\n          <div class=\"media-left\">\n            <a href=\"#\">\n              <img class=\"media-object\" src=\"{{tweet.image_url}}\" alt=\"...\">\n            </a>\n          </div>\n          <div class=\"media-body\">\n            <div class=\"display-inline\"><h5 class=\"media-heading\">{{tweet.author}}</h5>&nbsp;<h6 class=\"text-muted\">@{{tweet.username}}</h6></div>\n            <small>{{tweet.tweet}}</small>\n            <like-component [like]= \"true\" [likes]=\"tweet.totalVotes\"></like-component>\n          </div>\n        </div>\n    ",
            styles: ["\n        .display-inline > h5, h6 {\n            display: inline;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [tweets_service_1.TweetsService])
    ], TweetComponent);
    return TweetComponent;
}());
exports.TweetComponent = TweetComponent;
//# sourceMappingURL=tweets.component.js.map