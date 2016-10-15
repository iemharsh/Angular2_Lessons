import {NgModule} from "@angular/core";
import {WidgetOneComponent} from "./widget-one.component";
import {AutoGrowDirective} from "../directives/auto-grow.directive";
@NgModule({
    declarations: [WidgetOneComponent, AutoGrowDirective],
    exports: [WidgetOneComponent]
})
export class WidgetOneModule {}