import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import UserService from "../services/user-service";
import WhiteBoard from '../components/Whiteboard';
import Register from "../components/register";

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
                        <Link to="/register">Not a member?</Link>
                        <Route path='/register' exact
                               render={() =>
                                   <Register/>}/>
                    </div>
                    <div>
                        <div>
                            <Link to='/whiteboard'>
                                <button className="btn btn-primary"
                                onClick={() => {this.userService.login(
                                        this.refs.username.value,
                                        this.refs.password.value
                                    )}}>
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