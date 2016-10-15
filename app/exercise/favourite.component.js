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
var FavouriteComponent = (function () {
    function FavouriteComponent() {
        this.isActive = true;
        this.change = new core_1.EventEmitter();
    }
    FavouriteComponent.prototype.toggle = function ($event) {
        event.stopPropagation();
        this.isActive = this.isActive == true ? false : true;
        this.change.emit({ newValue: this.isActive });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FavouriteComponent.prototype, "change", void 0);
    FavouriteComponent = __decorate([
        core_1.Component({
            selector: 'favourite-component',
            template: "\n        <div>\n            <i class=\"glyphicon\" [class.glyphicon-star]=\"isActive\" [class.glyphicon-star-empty]=\"!isActive\" (click)=\"toggle($event)\"></i>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], FavouriteComponent);
    return FavouriteComponent;
}());
exports.FavouriteComponent = FavouriteComponent;
//# sourceMappingURL=favourite.component.js.map