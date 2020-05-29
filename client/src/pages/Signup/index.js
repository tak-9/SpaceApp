import React, { useState, useContext } from 'react';
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios';
import { LoginContext } from '../../contexts/LoginContext';

function Signup() {

    return (
        <div>
            <h1>Signup</h1>
            [<Link to={"/"} > Home </Link> | <Link to={"/login"} > Login </Link> | <Link to={"/about"} > About </Link> ]
             <p/>

                Coming up soon... We're working on it now.
        </div>
    )
}

export default Signup;