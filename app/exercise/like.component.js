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
var LikeComponent = (function () {
    function LikeComponent() {
        this.likes = 0;
        this.like = false;
    }
    LikeComponent.prototype.updateLikes = function () {
        if (this.like == true) {
            this.like = !this.like;
            this.likes--;
        }
        else {
            this.like = !this.like;
            this.likes++;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], LikeComponent.prototype, "likes", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], LikeComponent.prototype, "like", void 0);
    LikeComponent = __decorate([
        core_1.Component({
            selector: 'like-component',
            template: "\n        <div>\n            <i class=\"glyphicon glyphicon-heart\" (click)=\"updateLikes()\" [class.liked]=\"like\" [class.notliked]=\"!like\"></i> {{likes}}\n            \n        </div>\n    ",
            styles: ["\n        .notliked {\n            color: lightgray;\n        }\n        .liked {\n            color: deeppink;\n        }\n        .glyphicon {\n            cursor: pointer;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], LikeComponent);
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
//# sourceMappingURL=like.component.js.map