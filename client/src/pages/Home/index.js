import "./index.css";
import React, { useState, useContext, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useHistory } from 'react-router';  
import axios from 'axios';
import { LoginContext } from '../../contexts/LoginContext';
import { serverUrl } from '../../utils/env';

function Home() {
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [redirectTo, setRedirectTo] = useState('');

    const loginCtx = useContext(LoginContext);
    const { setLogInState } = loginCtx;
    
    useEffect(() => {

        const getUsername = localStorage.getItem('username');
        
		// axios.get using userid and token from localstorage, backend use id to verify against mongoose id + token (middle)

		if (!getUsername) {
            console.log("no user exists")
            // setRedirectTo("/");
            return;
			
		} 
		if (getUsername) {
			console.log("user is logged in")
            setRedirectTo("/scheduler");
		}

	}, [])



    const submitForm = e => {
        e.preventDefault();
        console.log("username is " + username);
        var url = serverUrl + '/api/login';
        console.log("url", url);
        axios.post(url, {
            username: username,
            password: password,
            redirectTo: redirectTo
        })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    console.log("Login Successful.");
                    setLogInState(true, response.data.username);
                    localStorage.setItem('username', response.data.username);
                    setRedirectTo("/scheduler");
                }
            })
            .catch(error => {
                console.log('login error: ', error);
                if (error.response.status === 401) {
                    console.log("401 error");
                    setErrorMsg('Username or Password is incorrect.')
                } else {
                    console.log("other login error");
                    setErrorMsg('Login Error');
                }
            })
    }; 

    const goToSignup = e => {
        e.preventDefault();
        history.push("/signup");
    }

    if (redirectTo === '') {
        return (
            <div className="container-fluid">
                <div className="row no-gutter">
                    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" id="bgimage"></div>
                    <div className="col-md-8 col-lg-6">
                        <div className="login d-flex align-items-center py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-9 col-lg-8 mx-auto">
                                        <h3 className="login-heading mb-4">Welcome to iSolution</h3>
                                        <small id="smallDesc">A solution for your isolation</small>
                                        <br />
                                        <div>{errorMsg}</div>
                                        <form id="form" onSubmit={submitForm}>
                                            {/* <div className="form-label-group"> */}
                                            <input onChange={e => setUsername(e.target.value)} type="text" id="inputUsername" className="form-control form-label-group" placeholder="Username" aria-label="Username" required />
                                            {/* <label id="inputEmail" placeholder="Email address">Email address</label> */}
                                            {/* </div> */}

                                            {/* <div className="form-label-group"> */}
                                            <input onChange={e => setPassword(e.target.value)} type="password" id="inputPassword" className="form-control form-label-group" placeholder="Password" aria-label="Password" required />
                                            {/* <label id="inputPassword">Password</label> */}
                                            {/* </div> */}

                                            <div className="custom-control custom-checkbox mb-3">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" id="rememberMe">Remember me</label>
                                            </div>
                                            <button  className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit" id="signinbtn">Sign in</button>

                                            {/* <div className="text-center">
                                                <a className="small" href="/">Forgot password?</a>
                                            </div> */}
                                        </form>
                                        <button onClick={goToSignup} className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit" id="signupbtn">Sign up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    } else {
        return (
            <div>
                redirect
                <Redirect to={{ pathname: redirectTo }} />
            </div>
        )
    }





}

export default Home;
