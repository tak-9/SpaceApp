import React, { useContext, useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { LoginContext } from '../../contexts/LoginContext';
import TaskAdding from "./TaskAdding.js";
import TaskButton from "./TaskButton.js";
import axios from 'axios';
import { serverUrl } from '../../utils/env';
import TaskList from "./TaskList.js";
import Schedule from '../../components/scheduler';
import "./style.css";

function PrivateContent() {
    let history = useHistory();
    let loginCtx = useContext(LoginContext);
    let { setLogInState, username } = loginCtx;
    const getUsername = localStorage.getItem('username');

    const [adding, setAdding] = useState(false);
    const[redirectUrl, setRedirectUrl] = useState('');

    // const logoutHandler = () => {
    //     console.log("logoutHandler");
    //     setLogInState(false, null);
    //     history.push("/");        
    // } 

    const handleSubmit = () => {
        setAdding(true);
    } 

    const handleSubmitForm = () => {
        setAdding(false);
    } 

    const [tasks, setTasks] = useState([]);

     useEffect(() => {
        var url = serverUrl + '/api/all/' + getUsername;
        console.log(url);
        
        axios.get(url)
            .then(res => {
                console.log("--------------------")
                console.log("### OK TaskList useEffect() axios get ", url, res.data);
                setTasks(res.data);
                console.log(tasks);
            })
            .catch(err => {
                console.log("### Error TaskList useEffect() axios get ", err);
            });
     }, [])


    return (
        <div className="body">
            <div className="center"> 
            {/* <h1>Private Page</h1> */}
            <h3>Scheduling For {getUsername}!</h3>
            </div>
            <br />
    { adding ? <TaskAdding onClick={handleSubmitForm} adding={adding} taskButtonClick={handleSubmit}/> : <TaskButton onClick={handleSubmit}/> } 
            <br />
            <TaskList tasks={tasks} />
            <br />
            {/* <button onClick={logoutHandler}>Logout</button>  */}
            {/* <Schedule/>  */}
        </div>
    );    
}

export default PrivateContent;
