import React, {useContext, useEffect, useState} from 'react';
import { Redirect, Link } from 'react-router-dom';
import { LoginContext } from '../../contexts/LoginContext';
import PrivateContent from './privateContent';
import Unauthorized from '../common/Unauthorized';
import Schedule from '../../components/scheduler';
import Home from "../Home/index";

function Private() {
    
    let loginCtx = useContext(LoginContext);
    let { loggedIn } = loginCtx;
    const [redirectTo, setRedirectTo] = useState('');

    useEffect(() => {

        const getUsername = localStorage.getItem('username');
        
		// axios.get using userid and token from localstorage, backend use id to verify against mongoose id + token (middle)

		if (!getUsername) {
            console.log("no login detected, please login")
            setRedirectTo("/");
            return;
			
		} 
		if (getUsername) {
			console.log("user is logged in")
            setRedirectTo("/scheduler");

		}

	}, [])

    return (
        <>
            {/* { loggedIn ? <PrivateContent />: <Home /> } */}
            <PrivateContent />
            <Schedule />
        </>
    );
    
}

export default Private;
