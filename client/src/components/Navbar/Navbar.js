import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import axios from 'axios';
import { useHistory } from 'react-router';
import { serverUrl } from '../../utils/env';
import { LoginContext } from '../../contexts/LoginContext';
// import { UserProvider, useUserContext } from "../../utils/userLoginContext"

function Navbar() {

    const [username, setUsername] = useState();
    // const [state, dispatch] = useUserContext();

    const loginCtx = useContext(LoginContext);
    const { setLogInState } = loginCtx;
    console.log(loginCtx, loginCtx)

    const history = useHistory();

    useEffect(() => {

        const getUsername = localStorage.getItem('username');
        
		// axios.get using userid and token from localstorage, backend use id to verify against mongoose id + token (middle)

		if (!getUsername) {
            console.log("no user exists")
            history.push("/");
            // setRedirectTo("/");
            return;
			
		} 
		if (getUsername) {
            console.log("user is logged in")
            setUsername(getUsername);
            // history.push("/scheduler");
            // setRedirectTo("/scheduler");
		}

	}, [loginCtx])

    const logout = e => {
        e.preventDefault();
        var url = serverUrl + '/api/logout';

        axios.get(url).then((res) => {

            if (res.data.success) {
                setUsername(null);
                localStorage.removeItem('username')
                setLogInState(false, null);
                history.push("/");
            }
        }).catch(err => {
            if (err) throw err;
            console.log(err)
        })
    }

    if (!username) {
        
        return <div></div>
    } else {

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
                                        <a onClick={logout} className="dropdown-item" href="#">Logout</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )

    }


}

export default Navbar;