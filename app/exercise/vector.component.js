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
var VectorComponent = (function () {
    function VectorComponent() {
        this.totalVotes = 10;
        this.voteCount = 0;
        this.vote = new core_1.EventEmitter();
    }
    VectorComponent.prototype.upVote = function () {
        if (this.voteCount == 0 || this.voteCount == -1) {
            this.voteCount = 1;
            this.totalVotes += this.voteCount;
            this.vote.emit({ vote: this.voteCount });
        }
    };
    VectorComponent.prototype.downVote = function () {
        if (this.voteCount == 0 || this.voteCount == 1) {
            this.voteCount = -1;
            this.totalVotes += this.voteCount;
            this.vote.emit({ vote: this.voteCount });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], VectorComponent.prototype, "totalVotes", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], VectorComponent.prototype, "voteCount", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], VectorComponent.prototype, "vote", void 0);
    VectorComponent = __decorate([
        core_1.Component({
            selector: 'vector-component',
            template: "\n    <div style=\"width: 20px\">\n         <i class=\"glyphicon glyphicon-menu-up\" (click)=\"upVote()\" [class.vote]=\"voteCount == 1 ? true : false\"></i>\n         <span>{{totalVotes}}</span>\n         <i class=\"glyphicon glyphicon-menu-down\" (click)=\"downVote()\" [class.vote]=\"voteCount == -1 ? true : false\"></i>         \n    </div>      \n    ",
            styles: ["\n        .glyphicon {\n            cursor: pointer;\n        }\n        i:hover {\n            color: darkorange;\n        }\n        .vote {\n            color:orange;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], VectorComponent);
    return VectorComponent;
}());
exports.VectorComponent = VectorComponent;
//# sourceMappingURL=vector.component.js.map