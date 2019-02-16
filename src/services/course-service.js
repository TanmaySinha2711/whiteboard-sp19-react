let singleton = Symbol()

export default class CourseService {
    constructor(singletonToken) {
        if (singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[singleton])
            this[singleton] = new CourseService(singleton);
        return this[singleton]
    }

    addCourse(course) {
        return fetch("https://web-dev-ass5-java.herokuapp.com/api/courses", {
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })}

    findCourseById(courseId) {
        return fetch("https://web-dev-ass5-java.herokuapp.com/api/courses" + '/' + courseId)
            .then(function(response){
                return response.json();
            });
    }

    findAllCourses() {
        return fetch("https://web-dev-ass5-java.herokuapp.com/api/courses")
            .then(function (response) {
                return response.json()
            })
    }

    deleteCourse(courseId) {
        return fetch("https://web-dev-ass5-java.herokuapp.com/api/courses" + '/' + courseId,
            {
                method: 'DELETE'
            }).then(function (response) {
            return response;
        })
    }

}
