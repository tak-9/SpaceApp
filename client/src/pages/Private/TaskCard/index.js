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
    <tr>
      <td>{props.taskname}</td>
      <td>{props.category}</td>
      <td>
        <button onClick={handleComplete}>Complete</button>
      </td>
    </tr>
  );
}

export default TaskCard;
