import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import UserService from "../services/user-service";
import WhiteBoard from '../components/Whiteboard';
import Register from "../components/register";

export default class LoginPanel extends Component {
    constructor(props){
        super(props);

        this.state = {
            username : "",
            password: "",
            loggedIn: false,
            courses: []
        };
        this.userService = UserService.instance;
        this.detectChange = this.detectChange.bind(this);
    }

    detectChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    logIn = (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        let self = this;
        this.userService.login(username, password)
            .then(function(res){
                if(!res.username){
                    console.log(res);
                    alert("invalid credentials")
                }else{
                    console.log(res);
                    self.props.history.push("/whiteboard");
                }
            });
    };

    render(){
        const { username, password, loggedIn, courses } = this.state;
        return(
            <div className="container-fluid">
                <h1>Login</h1>
                <form onSubmit={this.logIn}>
                    <div>
                        <label htmlFor="username">Username: </label>
                        <input type="text"
                               name="username"
                               className="form-control"
                               placeholder="Enter your username"
                               value={username}
                               onChange={this.detectChange}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input type="text"
                               name="password"
                               className="form-control"
                               placeholder="Enter your password"
                               value={password}
                               onChange={this.detectChange}/>
                    </div>
                    <br/>
                    <div>
                        <Link to="/register">Not a member?</Link>
                    </div>
                    <div>
                        <div>
                                <button className="btn btn-primary" type = {"submit"}>
                                    Login
                                </button>
                        </div>
                    </div>
                </form>
            </div>
        )}
}