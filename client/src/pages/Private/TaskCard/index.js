import React from "react";
import "./style.css";

function TaskCard(props) {
  var completed = "";
  if (props.completed === false) {
    completed = "Uncompleted";
  } else {
    completed = "Completed";
  }

  const handleComplete = () => {
    completed = "Completed";
} 

  return (
    <ul>
    <li>{props.taskname}</li>
    <li>{props.category}</li>
    <li>
    <button onClick={handleComplete}>Complete</button>
    </li>
   </ul>
  );
}

export default TaskCard;
