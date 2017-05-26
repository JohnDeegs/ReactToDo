import React from 'react';
import {AddNewTask} from './addTask';
import {ToDoAppList} from './appList';

export class Todo extends React.Component {
    constructor(props) {
        super();
        this.state = {tasks: props.tasks}
        this.updateList = this.updateList.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    updateList(text){
        //gets current state of tasks array
        let updatedTasks = this.state.tasks;
        //pushes the new value to this array
        updatedTasks.push(text);
        //sets the new state of the array after element pushed to array
        this.setState({tasks: updatedTasks});
    }

    removeTask(text){
        let updatedTasks = this.state.tasks;
        updatedTasks.splice(updatedTasks.indexOf(text), 1);
        this.setState({tasks: updatedTasks});
    }

    render() {
        return (
            <div>
                <h1>ToDo App</h1>
                <AddNewTask updateList={this.updateList} />
                <ToDoAppList tasks={this.state.tasks} remove={this.removeTask} />
            </div>
        );
    }
}




