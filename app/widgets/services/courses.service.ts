export class CoursesService {
    courses;
    constructor() {
        this.courses = ['php', 'java', 'nodejs', 'bootstrap'];
    }
    getService() {
        return this.courses;
    }

}