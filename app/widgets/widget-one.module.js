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
var widget_one_component_1 = require("./widget-one.component");
var auto_grow_directive_1 = require("../directives/auto-grow.directive");
var WidgetOneModule = (function () {
    function WidgetOneModule() {
    }
    WidgetOneModule = __decorate([
        core_1.NgModule({
            declarations: [widget_one_component_1.WidgetOneComponent, auto_grow_directive_1.AutoGrowDirective],
            exports: [widget_one_component_1.WidgetOneComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], WidgetOneModule);
    return WidgetOneModule;
}());
exports.WidgetOneModule = WidgetOneModule;
//# sourceMappingURL=widget-one.module.js.map