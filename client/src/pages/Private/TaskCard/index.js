import React from "react";
import "./style.css";

function TaskCard(props) {
  return (
    <ul>
      <li>
        Task: {props.taskname}
      </li>
      <li>
        Category: {props.category}
      </li>
      <li>
        Completed: {props.completed}
      </li>
    </ul>
  );
}

export default TaskCard;
