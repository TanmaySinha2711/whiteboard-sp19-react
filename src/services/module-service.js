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
        return fetch("https://web-dev-ass5-java.herokuapp.com/api/courses/{cid}/modules".replace('cid', courseId),
            {body: JSON.stringify(module),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response) {
                return response.json();
            })
    }

    findAllModulesForCourse(courseId) {
        return fetch(
            "https://web-dev-ass5-java.herokuapp.com/api/courses/cid/modules"
                .replace('cid', courseId))
            .then(function (response) {
                return response.json();
            })
    }


    deleteModule(moduleId) {
        return fetch("https://web-dev-ass5-java.herokuapp.com/api/modules/{mid}".replace
        ('mid', moduleId), {
            method: 'delete'
        })
    }
    findModuleById(moduleId) {
        return fetch("https://web-dev-ass5-java.herokuapp.com/api/modules" + '/' + moduleId)
            .then(function(response){
                return response.json();
            });
    }
}
