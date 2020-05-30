import React, { useEffect } from "react";
import './TaskList.css';
import { serverUrl } from '../../utils/env';
import axios from 'axios';
import TaskCard from "./TaskCard";

function TaskList(props) {
    var tasks = {}

    useEffect(() => {
        var url = serverUrl + '/api/dummyname';
        axios.get(url)
        .then((res)=>{
            console.log("### OK TaskList useEffect() axios get ", url, res);
            tasks = res;
        })
        .catch((err)=>{
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