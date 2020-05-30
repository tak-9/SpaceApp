import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import axios from 'axios';
import { useHistory } from 'react-router';
// import { UserProvider, useUserContext } from "../../utils/userLoginContext"

function Navbar() {

    const [username, setUsername] = useState()
    // const [state, dispatch] = useUserContext();

    const history = useHistory();

    const logout = e => {
        e.preventDefault();

        axios.get('/api/users/logout').then((res) => {

            if (res.data.success) {
                setUsername(null);
                // dispatch({ type: "logged out", username: "" })
                localStorage.removeItem('token')
                localStorage.removeItem('userId')
                localStorage.removeItem('loggedIn')
                localStorage.removeItem('username')

                history.push("/");
            }
        }).catch(err => {
            if (err) throw err;
            console.log(err)
        })
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img id="logo" alt="mylogo" src="./iSolutionlogo_blue.png" height="100" width="200"
                            align="left" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Menu
                                </a>

                                <div className="dropdown-menu dropdown-menu-right animate slideIn" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/">Home</a>
                                    <a className="dropdown-item" href="/scheduler">My Scheduler</a>
                                    <a className="dropdown-item" href="/chart">My Progress</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/about">About us</a>
                                    <a className="dropdown-item" href="/logout">Logout</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;