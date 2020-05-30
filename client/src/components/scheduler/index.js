import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import Draggable from "../draggable";
import Droppable from "../droppable";

function Schedule() {

    const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
        <table className="scheduler">
            <thead>
                <tr>
                    <th>Time</th>
                    <th className="schedule-content">Content</th>
                </tr>
            </thead>
            <tbody>
                {hours.map(hour => (
                    <tr key={hour} className={hour % 2 === 0 ? "even-row" : "odd-row"} >
                        <td  className="time">{hour}AM  </td>
                        <td className="schedule-content">

                            <Droppable id={`drop${hour}am`}>

                                Content  <Draggable id={`${hour}am`}> test </Draggable>  <span className="far fa-trash-alt"></span>


                            </Droppable>
                        </td>
                    </tr>
                ))}
                {hours.map(hour => (
                    <tr key={hour} className={hour % 2 === 0 ? "even-row" : "odd-row"}>
                        <td className="time" > {hour} PM  </td>
                        <td className="schedule-content">
                            <Droppable id={`drop${hour}am`}>
                                Content  <Draggable id={`${hour}pm`} >test</Draggable>   <span className="far fa-trash-alt"></span>


                            </Droppable>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    )
}

export default Schedule
