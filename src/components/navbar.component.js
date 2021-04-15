import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="#">ExcerTRacker</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to="/">Exercises</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/create">Create Exercise Log</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/user">Create User</Link>
                        </li>
                    </ul>
                    </div>
                </div>
  </nav>
        )
    }
}