import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Home() {
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
                                    <form id="form">
                                        {/* <div className="form-label-group"> */}
                                            <input type="email" id="inputEmail" className="form-control form-label-group" placeholder="Email address" aria-label="Email address" required />
                                            {/* <label id="inputEmail" placeholder="Email address">Email address</label> */}
                                        {/* </div> */}

                                        {/* <div className="form-label-group"> */}
                                            <input type="password" id="inputPassword" className="form-control form-label-group" placeholder="Password" aria-label="Password" required />
                                            {/* <label id="inputPassword">Password</label> */}
                                        {/* </div> */}

                                        <div className="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" id="rememberMe">Remember me</label>
                                        </div>
                                        <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit" id="signinbtn">Sign in</button>
                                        <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit" id="signupbtn">Sign up</button>
                                        <div className="text-center">
                                            <a className="small" href="#">Forgot password?</a>
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

export default Home;
