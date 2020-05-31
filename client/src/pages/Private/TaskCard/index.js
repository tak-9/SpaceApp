import React from "react";
import "./style.css";
import Draggable from '../../../components/draggable';
import styled from 'styled-components';
import { decodeBase64 } from "bcryptjs";
import { serverUrl } from '../../../utils/env';
import axios from 'axios';

function TaskCard(props) {
  const Item = styled.div`
  padding:8px;
  color:#555;
  background-color:white;
  border-radius:3px;
  `
  var completed = "";
  if (props.completed === false) {
    completed = "Uncompleted";
  } else {
    completed = "Completed";
  }

  const handleComplete = () => {
    completed = "Completed";
    var taskname = props.taskname;
    var username = props.username;
    var url = serverUrl + '/api/update';
        console.log(url);
        
        axios.post(url, {
          taskname: taskname,
          username: username
      })
          .then(response => {
              console.log('updating response: ')
              console.log(response)
              if (response.status === 200) {
                  console.log("Update Successful.");
              }
          })
          .catch(error => {
              console.log('login error: ', error);
          })
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
