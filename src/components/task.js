import React from 'react';

const Task = (props) => {
    return(
        <div className="task">
            <p className="task__name">{props.item}</p>
            <button className="task__btn" onClick={ (e) => props.handleDeleteTask(props.item)}>remove</button>
        </div>
    )
}

export default Task;