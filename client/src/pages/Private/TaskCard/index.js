import React from "react";
import "./style.css";

function TaskCard(props) {
  var completed = "";
  if (props.completed === false) {
    completed = "false";
  } else {
    completed = "true";
  }
  return (
    <tr>
    <td>{props.taskname}</td>
    <td>{props.category}</td>
    <td>{completed}</td>
   </tr>
  );
}

export default TaskCard;
