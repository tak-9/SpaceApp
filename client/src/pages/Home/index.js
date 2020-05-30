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
                                <small id ="smallDesc">A solution for your isolation</small>
                                <br />
                                <form id= "form">
                                    <div className="form-label-group">
                                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                                        <label id="inputEmail">Email address</label>
                                    </div>

                                    <div className="form-label-group">
                                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                        <label id="inputPassword">Password</label>
                                    </div>

                                    <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" id="customCheck1">Remember me</label>
                                    </div>
                                    <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</button>
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



        // <div>
        //     <h1>Home Page</h1>
            
        //     [<Link to={"/login"} > Login </Link> | <Link to={"/about"} > About </Link> | <Link to={"/signup"} > Signup </Link> ] 
        //     <p>
        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
        //         consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis
        //         parturient montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus
        //         sollicitudin at et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
        //         gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin
        //         turpis semper, et interdum risus lobortis. Vestibulum suscipit nunc non egestas
        //         tristique. Proin hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan
        //         quam non, tristique tempor erat. Nullam non sem facilisis, tempus tortor sit amet,
        //         volutpat nisl. Ut et turpis non nunc maximus mollis a vitae tortor. Pellentesque
        //         mattis risus ac quam laoreet cursus. Praesent suscipit orci neque, vestibulum
        //         tincidunt augue tincidunt non. Duis consequat mattis tortor vitae mattis.
        //     </p>
        // </div>
    );
}

export default Home;
