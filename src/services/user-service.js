let singleton = Symbol()

export default class UserService {
    constructor(singletonToken) {
        if (singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
        this.URL = "http://localhost:8080"
    }

    static get instance() {
        if (!this[singleton])
            this[singleton] = new UserService(singleton);
        return this[singleton]
    }

    findAllUsers(){
        return fetch(this.URL + "/api/users")
            .then(function (response) {
                return response.json()
            })
    }

    login = (username, password) => {

        const requestBody = {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        };

        return fetch(this.URL + '/api/login', requestBody)
            .then(this.handleResponse)
            .then(user => {
                localStorage.setItem('user', JSON.stringify(user));
                return user;
            });
    };

    register = (username, password) => {
        const requestBody = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        };

        return fetch(this.URL+'/api/register', requestBody)
            .then(this.handleResponse)
            .then(user => {
                if(user!=null){
                    localStorage.setItem('user', JSON.stringify(user));
                }
                return user;
            });
    };

    logout = () => {
        const requestBody = {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' }
        };

        return fetch(this.URL+'/api/logout', requestBody)
            .then(function(res){
                console.log(res);
                return null;
            });
    };

    handleResponse = (response) => {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 401) {
                    console.log("401 Error");
                }

                const err = (data && data.message) || response.statusText;
                return Promise.reject(err);
            }

            return data;
        });
    }

    findUserByCredentials(username, password){
        return fetch(this.URL + "/api/users/" + username + "/" + password)
            .then(function (response) {
                return response.json()
            })
    }
}