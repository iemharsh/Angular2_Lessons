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
var HomeComponent = (function () {
    function HomeComponent() {
        this.selected = true;
    }
    HomeComponent.prototype.onChange = function ($event) {
        console.log('Event On!.!.!>!!>>!');
        console.log($event);
    };
    HomeComponent.prototype.updateVotes = function ($event) {
        console.log($event);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            template: "\n    <div>I am the home component</div>\n    <h4>Favourite Component</h4><favourite-component (change)=\"onChange($event)\"></favourite-component>\n    <h4>Like Component</h4><like-component [like]=\"\"></like-component>\n    <h4>Vector Component</h4><vector-component (vote)=\"updateVotes($event)\"></vector-component>\n    <h4>Tweets Component</h4><tweet-component></tweet-component>\n    \n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map