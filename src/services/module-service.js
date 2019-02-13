let singleton = Symbol();

export default class ModuleService {

    constructor(singletonToken) {
        if (singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[singleton])
            this[singleton] = new ModuleService(singleton);
        return this[singleton]
    }

    createModule(courseId, module) {
        return fetch("http://localhost:8080/api/courses/{cid}/modules".replace('cid', courseId),
            {body: JSON.stringify(module),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response) {
                return response.json();
            })
    }

    findAllModulesForCourse(courseId) {
        return fetch(
            "http://localhost:8080/api/courses/{cid}/modules"
                .replace('cid', courseId))
            .then(function (response) {
                return response.json();
            })
    }


    /*deleteModule(moduleId) {
        return fetch(MODULE_DELETE_URL_HEROKU.replace
        ('MID', moduleId), {
            method: 'delete'
        })
    }*/
}
