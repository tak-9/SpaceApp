import React from "react";
import './TaskAdding.css';

function TaskAdding(props) {
    let onClick = props.onClick;

    return (
        <div className="surrounding">
            <form action="/action_page.php">
                <label for="taskname">Task Name</label><br/>
                <input type="text" id="taskname" name="taskname" placeholder="Task name is..." />
                <br/>
                <label for="category">Category</label>
                <br/>
                <select id="category" name="category">
                    <option value="wellness">Wellness</option>
                    <option value="social">Social</option>
                    <option value="exercise">Exercise</option>
                </select>
                <br/>
                <input type="checkbox" id="reoc" name="reoc" value="reoc" />
                <label for="reoc"> Reoccurring? </label><br></br>
                <br/>                
                <input type="submit" value="Submit" id="submittingform" onClick={onClick}/>
            </form>
        </div>
    );
}

export default TaskAdding;
