let singleton = Symbol();

export default class ModuleService {

    constructor(singletonToken) {
        if (singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
        this.URL = "http://localhost:8080"
    }
    static get instance() {
        if(!this[singleton])
            this[singleton] = new ModuleService(singleton);
        return this[singleton]
    }

    createModule(courseId, module) {
        return fetch(this.URL + "/api/courses/" + courseId + "/module",
            {body: JSON.stringify(module),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response) {
                return response.json();
            })
    }

    findAllModulesForCourse(courseId) {
        return fetch(this.URL + "/api/courses/cid/modules"
                .replace('cid', courseId))
            .then(function (response) {
                return response.json();
            })
    }

    deleteModule(moduleId) {
        return fetch(this.URL + "/api/modules/" + moduleId,
            {
                method: 'DELETE'
            }).then(function (response) {
            return response;
        })
    }

    findModuleById(moduleId) {
        return fetch(this.URL + "/api/modules" + '/' + moduleId)
            .then(function(response){
                return response.json();
            });
    }
}
