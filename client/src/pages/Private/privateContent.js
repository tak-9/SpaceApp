import React, { useContext, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { LoginContext } from '../../contexts/LoginContext';
import TaskAdding from "./TaskAdding.js";
import TaskButton from "./TaskButton.js";
import TaskList from "./TaskList.js";

function PrivateContent() {
    let history = useHistory();
    let loginCtx = useContext(LoginContext);
    let { setLogInState, username } = loginCtx;

    const [adding, setAdding] = useState(false);
    const[redirectUrl, setRedirectUrl] = useState('');

    const logoutHandler = () => {
        console.log("logoutHandler");
        setLogInState(false, null);
        history.push("/");        
    } 

    const handleSubmit = () => {
        setAdding(true);
    } 

    const handleSubmitForm = () => {
        setAdding(false);
        
    } 

    return (
        <div>
            <h1>Private Page</h1>
            <h3>Scheduling For {username}!</h3>
            { adding ? <TaskAdding onClick={handleSubmitForm}/> : <TaskButton onClick={handleSubmit}/>}  
            <TaskList />
            <button onClick={logoutHandler}>Logout</button> 
        </div>
    );    
}

export default PrivateContent;
