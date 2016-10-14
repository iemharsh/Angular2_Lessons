"use strict";
var CoursesService = (function () {
    function CoursesService() {
        this.courses = ['php', 'java', 'nodejs', 'bootstrap'];
    }
    CoursesService.prototype.getService = function () {
        return this.courses;
    };
    return CoursesService;
}());
exports.CoursesService = CoursesService;
//# sourceMappingURL=courses.service.js.map