import React, { useEffect, useState } from "react";
import './TaskList.css';
import { serverUrl } from '../../utils/env';
import axios from 'axios';
import TaskCard from "./TaskCard";
import "./TaskCard/style.css";
import Draggable from 'react-draggable';

function TaskList(props) {
    console.log("Props . tasks: " + props.tasks)
    let tasks = props.tasks;
    console.log("Task List: " + tasks);

    return (
        <div className="tasklist">
            <table>
                <tr>
                    <th>Task </th>
                    <th>Category </th>
                    <th>Completed </th>
                </tr>
                {tasks.map(task => (
                    <Draggable>
                        <TaskCard
                            taskname={task.taskname}
                            category={task.category}
                            completed={task.completed}
                        />
                    </Draggable>

                ))}
            </table>
        </div>
    );
}

export default TaskList;