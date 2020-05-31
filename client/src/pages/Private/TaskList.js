import React, { useEffect, useState } from "react";
import './TaskList.css';
import TaskCard from "./TaskCard";
import "./TaskCard/style.css";
import Draggable from '../../components/draggable';

function TaskList(props) {
    console.log("Props . tasks: " + props.tasks)
    let tasks = props.tasks;
    console.log("Task List: " + tasks);

    return (
        <div className="tasklist">
            <table>
                <tr>
                    <th className="taskList">Task </th>
                    <th className="taskList">Category </th>
                    <th className="taskList">Completed </th>
                </tr>
                
                {tasks.map(task => (
                        <TaskCard  
                            taskname={task.taskname}
                            category={task.category}
                            completed={task.completed}
                            username={props.username}
                        />

                ))}
            </table>
        </div>
    );
}

export default TaskList;