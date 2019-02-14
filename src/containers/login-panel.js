import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import UserService from "../services/user-service";
import WhiteBoard from '../components/Whiteboard';
import CourseGrid from "../components/Whiteboard";

export default class LoginPanel extends Component {
    constructor() {
        super();
        this.userService = UserService.instance
    }
    render(){
        return(
            <Router>
                <div className="container-fluid">
                    <h1>Login</h1>
                    <div>
                        <label htmlFor="username">Username: </label>
                        <input type="text"
                               id="username"
                               className="form-control"
                               placeholder="Enter your username"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input type="text"
                               id="password"
                               className="form-control"
                               placeholder="Enter your password"/>
                    </div>
                    <br/>
                    <div>
                        <a href="register.client.html">Not a member?</a>
                    </div>
                    <div>
                        <div>
                            <Link to='/whiteboard'>
                                <button className="btn btn-primary">
                                    Login
                                </button>
                            </Link>
                            <Route path='/whiteboard' exact
                                   render={() =>
                                       <WhiteBoard/>}/>
                        </div>
                    </div>
                </div>
            </Router>
        )}
}