import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import Draggable from "../draggable";
import Droppable from "../droppable";

function Schedule() {

    const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
        <div>
            <table className="scheduler">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th className="schedule-content">Content</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {hours.map(hour => (
                        <tr key={hour} className={hour % 2 === 0 ? "even-row" : "odd-row"} >
                            <td >{hour}AM  </td>

                            <Droppable id={`drop${hour}am`}>

                                <td className="schedule-content">
                                  Content  <Draggable id={`${hour}am`}> test </Draggable>  <span className="far fa-trash-alt"></span>
                                </td>

                            </Droppable>
                        </tr>
                    ))}
                    {hours.map(hour => (
                        <tr key={hour} className={hour % 2 === 0 ? "even-row" : "odd-row"}>
                            <td > {hour} PM  </td>
                            <Droppable id={`drop${hour}am`}>
                                <td className="schedule-content">
                                  Content  <Draggable id={`${hour}pm`} >test</Draggable>   <span className="far fa-trash-alt"></span>
                                </td>

                            </Droppable>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default Schedule
