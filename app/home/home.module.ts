import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {WidgetOneComponent} from "../widgets/widget-one.component";
import {WidgetTwoComponent} from "../widgets/widget-two.component";
import {WidgetOneModule} from "../widgets/widget-one.module";
import {WidgetTwoModule} from "../widgets/widget-two.module";
import {CommonModule} from "@angular/common";
import {FavouriteComponent} from "../exercise/favourite.component";
import {LikeComponent} from "../exercise/like.component";
import {VectorComponent} from "../exercise/vector.component";
@NgModule({
    declarations: [HomeComponent, FavouriteComponent, LikeComponent, VectorComponent],
    imports: [CommonModule],
    exports: [HomeComponent, CommonModule, FavouriteComponent]
})

export  class HomeModule { }