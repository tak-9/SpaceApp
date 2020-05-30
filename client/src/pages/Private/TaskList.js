import React, { useEffect } from "react";
import './TaskList.css';
import { serverUrl } from '../../utils/env';
import axios from 'axios';

function TaskList(props) {
    let tasks = props.tasks;

    useEffect(() => {
        var url = serverUrl + '/api/dummyname';
        axios.get(url)
        .then((res)=>{
            console.log("### OK TaskList useEffect() axios get ", url, res);
        })
        .catch((err)=>{
            console.log("### Error TaskList useEffect() axios get ", err);
        });
    },[])

    return (
        <div className="tasklist">
            tasks.foreach{}
        </div>
    );
}

export default TaskList;