import React from "react";
import './TaskButton.css';

function TaskButton(props) {
    let onClick = props.onClick;

    return (
        <div>
            <button onClick={onClick} className="TaskButton">Add New Task</button>
        </div>
    );
}

export default TaskButton;