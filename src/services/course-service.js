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
        return fetch("http://localhost:8080/api/courses", {
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })}

    findCoursesById(courseId) {
        return fetch("http://localhost:8080/api/courses" + '/' + courseId)
            .then(function(response){
                return response.json();
            });
    }

    findAllCourses() {
        return fetch("http://localhost:8080/api/courses")
            .then(function (response) {
                return response.json()
            })
    }

    deleteCourse(courseId) {
        return fetch("http://localhost:8080/api/courses" + '/' + courseId,
            {
                method: 'DELETE'
            }).then(function (response) {
            return response;
        })
    }

   /* findWidgetsByTopic = (topicId) => {
        let widgets = []
        for(let i = 0; i < this.courses[0].modules.length; i++)
            for(let j = 0; j < this.courses[0].modules[i].lessons.length; j++)
                for(let k = 0; k < this.courses[0].modules[i].lessons[j].topics.length; k++)
                        if(this.courses[0].modules[i].lessons[j].topics[k].id === topicId)
                            return this.courses[0].modules[i].lessons[j].topics[k].widgets
    }*/
}
