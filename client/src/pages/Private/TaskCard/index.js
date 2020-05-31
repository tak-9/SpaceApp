import React from "react";
import "./style.css";
import Draggable from '../../../components/draggable';

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
      <td  className="taskList">
        <Draggable id={props.taskname}>
          {props.taskname}
        </Draggable> </td>
      <td className="taskList">
        {props.category}
        
      </td>
      <td className="taskList">
        
      <button onClick={handleComplete}>Complete</button>
      </td>
    </tr>
  );
}

export default TaskCard;
