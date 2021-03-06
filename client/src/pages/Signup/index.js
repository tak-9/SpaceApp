import React, { useState, useContext } from 'react';
import "./index.css";
import { Redirect, Link } from 'react-router-dom';
import { useHistory } from 'react-router';  
import axios from 'axios';
import { LoginContext } from '../../contexts/LoginContext';
import { serverUrl } from '../../utils/env';

function Signup() {

    const history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState();
    const [rePassword, setRePassword] = useState();
    const [errorMsg, setErrorMsg] = useState('');


    const submitForm = e => {
        e.preventDefault();
        var url = serverUrl + '/api/signup';
        if (password === rePassword){
            axios.post(url, {
                username: username,
                password: password
            }).then((res) => {
                console.log(res)
                if(res.data.user.success){
                    history.push("/");
                }
            }).catch((error) => {
                console.log(error + " line 31 error")
            })
        } else {
    
            setErrorMsg("Password entries do not match. Please re-enter password.")
        }


    }




    return (
        <div className="container-fluid">
            <div className="row no-gutter">
                <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" id="bgimage"></div>
                <div className="col-md-8 col-lg-6">
                    <div className="login d-flex align-items-center py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9 col-lg-8 mx-auto">
                                    <h3 className="login-heading mb-4">Create an account for iSolution</h3>
                                    <small id="smallDesc">A solution for your isolation</small>
                                    <br />
                                    <small id="errorMsg">{errorMsg}</small>
                                    <form id="form" onSubmit={submitForm}>
                                            <input onChange={e => setUsername(e.target.value)} type="text" id="inputUsername" className="form-control form-label-group" placeholder="Enter username" aria-label="Username" required />
                                            <input onChange={e => setPassword(e.target.value)} type="password" id="inputPassword" className="form-control form-label-group" placeholder="Enter password" aria-label="Password" required />
                                            <input onChange={e => setRePassword(e.target.value)} type="password" id="reInputPassword" className="form-control form-label-group" placeholder="Re-enter password" aria-label="Password" required />
                                        <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit" id="signupbtn">Sign up</button>
                                        <div className="text-center">
                                            <a className="small" href="/">Go back to login page.</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Signup;