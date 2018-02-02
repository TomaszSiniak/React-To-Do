import React from 'react';

export default class AddTask extends React.Component{
    constructor(props){
        super(props);

        this.handleAddTask = this.handleAddTask.bind(this);
    }

    
    handleAddTask(e){
        e.preventDefault();
        
        const task = e.target.elements.task.value.trim();
        this.props.addTask(task);
    }

    render(){
        return(
            <div>
                <form className="add-task" onSubmit={this.handleAddTask}>  
                    <input className="add-task__input" type="text" name="task"/>
                    <button className="add-task__btn">Add Task</button>
                </form>
            </div>
        )
    }
}
