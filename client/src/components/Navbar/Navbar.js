import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import axios from 'axios';
import { useHistory } from 'react-router';
import { UserProvider, useUserContext } from "../../utils/userLoginContext"

function Navbar() {

    const [username, setUsername] = useState()
    const [state, dispatch] = useUserContext();

    const history = useHistory();

    const logout = e => {
        e.preventDefault();

        axios.get('/api/users/logout').then((res) => {

            if (res.data.success) {
                setUsername(null);
                dispatch({ type: "logged out", username: "" })
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
        <div className="container-fluid">
            <div className="row no-gutter">
                <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                <div className="col-md-8 col-lg-6">
                    <div className="login d-flex align-items-center py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9 col-lg-8 mx-auto">
                                    <h3 className="login-heading mb-4">Welcome back!</h3>
                                    <form>
                                        <div className="form-label-group">
                                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                                            <label for="inputEmail">Email address</label>
                                        </div>

                                        <div className="form-label-group">
                                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                            <label for="inputPassword">Password</label>
                                        </div>

                                        <div className="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" for="customCheck1">Remember password</label>
                                        </div>
                                        <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</button>
                                        <div className="text-center">
                                            <a className="small" href="#">Forgot password?</a></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;