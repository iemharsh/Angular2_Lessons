import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {HomeModule} from "./home/home.module";
import {CoursesService} from "./widgets/services/courses.service";
@NgModule({
    imports:      [ BrowserModule, HomeModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
})
export class AppModule { }
