import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import Draggable from "../draggable";
import Droppable from "../droppable";

function Schedule() {

    const hours = [5, 6, 7, 8, 9, 10, 11];
    const hoursPM = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    // const hours=["5AM","6AM","7AM","8AM","9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM"];
    return (
        <table className="scheduler">
            <thead>
                <tr>
                    <th>Time</th>
                    <th className="schedule-content">Activities</th>
                </tr>
            </thead>
            <tbody>
                {hours.map(hour => (
                    <tr key={hour} className={hour % 2 === 0 ? "even-row" : "odd-row"} >
                        <td className="time">{hour}AM  </td>
                        <td className="schedule-content">

                            <Droppable id={`drop${hour}am`}>
                                -

                                {/* <Draggable id={`${hour}am`}> test </Draggable>  */}
                                <p className="far fa-trash-alt"></p>


                            </Droppable>
                        </td>
                    </tr>
                ))}
                {hoursPM.map(hour => (
                    <tr key={hour} className={hour % 2 === 0 ? "even-row" : "odd-row"}>
                        <td className="time" > {hour} PM  </td>
                        <td className="schedule-content">
                            <Droppable id={`drop${hour}am`}>
                                -
                                {/* Content  <Draggable id={`${hour}pm`} >test</Draggable>  */}
                                <p className="far fa-trash-alt"></p>


                            </Droppable>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    )
}

export default Schedule
