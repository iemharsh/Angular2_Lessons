import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {WidgetOneComponent} from "../widgets/widget-one.component";
import {WidgetTwoComponent} from "../widgets/widget-two.component";
import {WidgetOneModule} from "../widgets/widget-one.module";
import {WidgetTwoModule} from "../widgets/widget-two.module";
import {CommonModule} from "@angular/common";
@NgModule({
    imports: [WidgetOneModule, WidgetTwoModule, CommonModule],
    declarations: [HomeComponent],
    exports: [HomeComponent, WidgetOneComponent, WidgetTwoComponent, CommonModule]
})

export  class HomeModule { }