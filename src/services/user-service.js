let singleton = Symbol()

export default class UserService {
    constructor(singletonToken) {
        if (singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[singleton])
            this[singleton] = new UserService(singleton);
        return this[singleton]
    }

    registerUser(user) {
        return fetch("http://localhost:8080/api/register", {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })
    }

    findAllUsers(){
        return fetch("http://localhost:8080/api/users")
            .then(function (response) {
                return response.json()
            })
    }

    login(user){
        return fetch("http://localhost:8080/api/login", {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })
    }
}