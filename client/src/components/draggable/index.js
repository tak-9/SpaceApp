import React from 'react';
import PropTypes from 'prop-types';

function Draggable(props) {
    function drag(e){
        const dt=e.dataTransfer;
        dt.effectAllowed="copyMove";
        dt.setData('transfer', e.target.id); 
    }
    function noAllowDrop(e){
        e.preventDefault();
    }
    return (
        <div className='drag' id={props.id} draggable='true ' onDragStart={drag}   onDragOver={noAllowDrop} >
            {props.children}

        </div>
    )
}
Draggable.propTypes={
    id:PropTypes.string,
    children:PropTypes.node
}

export default Draggable
