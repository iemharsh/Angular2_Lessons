import {Component} from "@angular/core";
import {CoursesService} from "./services/courses.service";
@Component({
    selector: 'widget-two',
    template: `
        
    <div>
        <h2>Example For *ngFor</h2>
        
        Courses
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>

    </div>
    `,
    providers : [CoursesService]
})
export class WidgetTwoComponent {
    courses : String[];
    constructor(coursesService : CoursesService) {
        this.courses = coursesService.getService();
    }
}