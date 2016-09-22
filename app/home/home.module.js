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
var widget_one_component_1 = require("../widgets/widget-one.component");
var widget_two_component_1 = require("../widgets/widget-two.component");
var widget_one_module_1 = require("../widgets/widget-one.module");
var widget_two_module_1 = require("../widgets/widget-two.module");
var common_1 = require("@angular/common");
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [widget_one_module_1.WidgetOneModule, widget_two_module_1.WidgetTwoModule, common_1.CommonModule],
            declarations: [home_component_1.HomeComponent],
            exports: [home_component_1.HomeComponent, widget_one_component_1.WidgetOneComponent, widget_two_component_1.WidgetTwoComponent, common_1.CommonModule]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map