let singleton = Symbol();

export default class LessonService {

    constructor(singletonToken) {
        if (singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
        this.URL = "https://web-dev-ass5-java.herokuapp.com"
    }
    static get instance() {
        if(!this[singleton])
            this[singleton] = new LessonService(singleton);
        return this[singleton]
    }

    createLesson(moduleId, lesson) {
        return fetch(this.URL + "/api/modules/{mid}/lessons".replace('mid', moduleId),
            {body: JSON.stringify(lesson),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response) {
            return response.json();
        })
    }

    findAllLessonsForModule(moduleId) {
        return fetch(this.URL + "/api/modules/mid/lessons"
                .replace('mid', moduleId))
            .then(function (response) {
                return response.json();
            })
    }


    deleteLesson(lessonId) {
        return fetch(this.URL + "/api/lessons/{lid}".replace
        ('lid', lessonId), {
            method: 'delete'
        })
    }

    findLessonById(lessonId) {
        return fetch(this.URL + "/api/lessons" + '/' + lessonId)
            .then(function(response){
                return response.json();
            });
    }
}
