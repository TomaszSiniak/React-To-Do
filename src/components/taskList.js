import React from 'react';

import Task from './task';

const TaskList = (props) => {
    return(
        <div>
            <div className="task-list">
                <p className="task-list__info"> Your Tasks</p>
                <button className="task-list__btn" onClick={props.deleteAll}>Delete all tasks</button>
            </div>
            {
                props.tasks.map( (item, key) => 
                    <Task 
                        item={item} 
                        key={key} 
                        handleDeleteTask={props.handleDeleteTask}
                    /> 
                )
            }
        </div>
    )
 } 

 export default TaskList;
    
        
