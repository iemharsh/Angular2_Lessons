import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {WidgetOneComponent} from "../widgets/widget-one.component";
import {WidgetTwoComponent} from "../widgets/widget-two.component";
import {WidgetOneModule} from "../widgets/widget-one.module";
import {WidgetTwoModule} from "../widgets/widget-two.module";
@NgModule({
    imports: [WidgetOneModule, WidgetTwoModule],
    declarations: [HomeComponent],
    exports: [HomeComponent, WidgetOneComponent, WidgetTwoComponent]
})

export  class HomeModule { }