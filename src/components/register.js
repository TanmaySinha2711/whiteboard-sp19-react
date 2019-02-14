import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import UserService from "../services/user-service";
import WhiteBoard from '../components/Whiteboard';
import LoginPanel from "../containers/login-panel";

export default class Register extends Component {
    constructor() {
        super();
        this.userService = UserService.instance
    }
    render(){
        return(
            <Router>
                <div className="container-fluid">
                    <h1>Register</h1>
                    <div>
                        <label htmlFor="username">Username: </label>
                        <input type="text"
                               ref="username"
                               className="form-control"
                               placeholder="Enter your username"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input type="text"
                               ref="password"
                               className="form-control"
                               placeholder="Enter your password"/>
                    </div>
                    <br/>
                    <div>
                        <Link to="/">Already a member?</Link>
                        <Route path='/' exact
                               render={() =>
                                   <LoginPanel/>}/>
                    </div>
                    <div>
                        <div>
                            <Link to='/whiteboard'>
                                <button className="btn btn-primary"
                                        onClick={() => {this.userService.registerUser(
                                            this.refs.username.value,
                                            this.refs.password.value
                                        )}}>
                                    Sign Up
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