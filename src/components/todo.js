import React from 'react';

import Header from './header';
import TaskList from './taskList';
import AddTask from './addTask';


export default class Todo extends React.Component{
    constructor(props){
        super(props);

        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);

        this.state = {
            tasks: []
        } 
    }

    componentDidMount(){
        const json = localStorage.getItem('tasks');
        const tasks = JSON.parse(json);

       if(tasks){
           this.setState( ()=> ( {tasks} ))
       }
    }

    componentDidUpdate(){
        const json = JSON.stringify(this.state.tasks);
        localStorage.setItem('tasks',json);
    }


    handleAddTask(task) {
        if(!task){
            return 'Enter yoru task'
        }else if(this.state.tasks.indexOf(task) > -1){
            return 'This task is on the list'
        }


        this.setState( (prevState) => ( {tasks: prevState.tasks.concat(task)} ));
    }


    handleDeleteAll() {
        this.setState( (prevState) => ( {tasks: []} ));
    }

    handleDeleteTask(removeTask){
        this.setState( (prevState) => ({
                tasks: prevState.tasks.filter( (task) => {
                    return removeTask !== task;
                })
            }
        ))
    }

    render(){
        return(
            <div>
                <Header />
                <div className="container">
                    <TaskList
                        deleteAll ={this.handleDeleteAll} 
                        tasks={this.state.tasks}
                        handleDeleteTask ={this.handleDeleteTask}
                    />
                    <AddTask 
                        addTask= {this.handleAddTask}
                    />
                </div>
            </div>
        )
    }
}
