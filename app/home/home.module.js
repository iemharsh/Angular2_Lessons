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
var home_component_1 = require("./home.component");
var common_1 = require("@angular/common");
var favourite_component_1 = require("../exercise/favourite.component");
var like_component_1 = require("../exercise/like.component");
var vector_component_1 = require("../exercise/vector.component");
var tweets_component_1 = require("../exersice4/tweets.component");
var tweets_service_1 = require("../exersice4/tweets.service");
var zippy_component_1 = require("../exercise5/zippy.component");
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            declarations: [home_component_1.HomeComponent, favourite_component_1.FavouriteComponent, like_component_1.LikeComponent, vector_component_1.VectorComponent, tweets_component_1.TweetComponent, zippy_component_1.ZippyComponent],
            imports: [common_1.CommonModule],
            exports: [home_component_1.HomeComponent, common_1.CommonModule],
            providers: [tweets_service_1.TweetsService]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map