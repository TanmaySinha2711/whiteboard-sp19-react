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

    registerUser = (username, password) => {
        return fetch("http://localhost:8080/api/register", {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());
    }

    findAllUsers(){
        return fetch("http://localhost:8080/api/users")
            .then(function (response) {
                return response.json()
            })
    }

    login = (username, password) => {
        return fetch("http://localhost:8080/api/login", {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());
    }
}