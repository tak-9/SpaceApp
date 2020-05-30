import React, { currentComponent, useState, useEffect  } from "react";
import './TaskAdding.css';
import axios from 'axios';
import { serverUrl } from '../../utils/env';
import TaskList from "./TaskList.js";

function TaskAdding(props) {

    let onClick = props.onClick;
    const [taskname, setTaskname] = useState('');
    const [category, setCategory] = useState('');
    const [reoccurring, setReoccurring] = useState('');
   
    const handle = (event) => {
        event.preventDefault();
        console.log("------------------------")
        console.log(taskname);
        console.log(category);
        console.log(reoccurring);
        console.log("------------------------")
        var lasting = null;
        if (reoccurring !== "") {
            lasting = true
        } else {
            lasting = false
        }
        var url = serverUrl + '/api/create';
        console.log(url);
        axios.post(url, {
            taskname: taskname,
            category: category,
            reoccurring: lasting,
            completed: false
        })
            .then(response => {
                console.log('creation response: ')
                console.log(response)
                if (response.status === 200) {
                    console.log("Login Successful.");
                }
            })
            .catch(error => {
                console.log('creation error: ', error);
                if (error.response.status === 401) {
                    console.log("401 error");
                } else {
                    console.log("other creation error");
                }
            })
        onClick();
    }

    return (
        <div>
            <div className="surrounding">
                <form action="/action_page.php">
                    <label for="taskname">Task Name</label><br />
                    <input type="text" id="taskname" name="taskname" placeholder="Task name is..."
                        onChange={e => setTaskname(e.target.value)} />
                    <br />
                    <label for="category">Category</label>
                    <br />
                    <select id="category" name="category" onChange={e => setCategory(e.target.value)}
                        defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled>Choose a Category ...</option>
                        <option value="wellness" selected>Wellness</option>
                        <option value="social">Social</option>
                        <option value="exercise">Exercise</option>
                    </select>
                    <br />
                    <input type="checkbox" id="reoc" name="reoc" value="reoc" onChange={e => setReoccurring(e.target.value)} />
                    <label for="reoc"> Reoccurring? </label><br></br>
                    <br />
                    <input type="submit" value="Submit" id="submittingform" onClick={handle} />
                </form>
            </div>
            <br />
        </div>
    );
}

export default TaskAdding;
