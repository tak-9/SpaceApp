import React, { useEffect, useState } from "react";
import './TaskList.css';
import { serverUrl } from '../../utils/env';
import axios from 'axios';
import TaskCard from "./TaskCard";

function TaskList(props) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        var url = serverUrl + '/api/all';

        axios.get(url)
        .then(res => {
            console.log("--------------------")
            console.log("### OK TaskList useEffect() axios get ", url, res.data);
            setTasks(res.data);
        })
        .catch(err => {
            console.log("### Error TaskList useEffect() axios get ", err);
        });
    },[])

    return (
        <div className="tasklist">
            {tasks.map(task => (
                                <TaskCard
                                    taskname={task.taskname}
                                    category={task.category}
                                    completed={task.completed}
                                />
                            ))} 
        </div>
    );
}

export default TaskList;