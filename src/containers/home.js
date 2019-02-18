import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import LoginPanel from "../containers/login-panel";
import Register from "../components/register";
import UserService from "../services/user-service";
import WhiteBoard from "../components/Whiteboard";
//import Profile from "./Profile";


export default class Home extends Component {

    constructor(props){
        super();
        this.userService = UserService.instance
    }

    logout = () => {

        this.userService
            .logout()
            .then(function(res){
                localStorage.removeItem("user");
            })
    };

    render() {
        return (

            <Router>
                <div>
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarNav" aria-controls="navbarNav"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" style={{flexGrow:'0'}} id="navbarNav">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item p-2">
                                    <Link to="/login">Login</Link>
                                </li>
                                <li className="nav-item p-2">
                                    <Link to="/register">Register</Link>
                                </li>
                                {/*<li className="nav-item">
                                    <Link to="/profile">Profile</Link>
                                </li>*/}
                                <li className="nav-item p-2">
                                    <Link to={"/login"} onClick={this.logout}>Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <Route path='/login'
                           exact
                           component={LoginPanel}/>
                    <Route path='/register'
                           exact
                           component={Register}/>
                    <Route path='/whiteboard'
                           exact
                           component={WhiteBoard}/>
                </div>
            </Router>
        )
    }
}

