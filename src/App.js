import React, { Component } from 'react';
import TodoForum from './components/TodoForum';
import TodoList from './components/TodoList';

class App extends Component{
    constructor(props) { //constructs empty todos list and todo 
        super(props);
        this.state={
            todos: [{
                //task:
                //id:
                //completedsa
            }],
            todo: ''
        }
        
    }
    inputChangeHandler = event => {
        this.setState({[event.target.name]: event.target.value})
    }
    addTask = event =>{
        event.preventDefault();
        let newTask = {
            task: this.state.todo,
            id: Date.now(),
            completed: false
        };
        this.setState({
            todos:[...this.state.todos, newTask],
            todo: ''
        })
    }

    render() {
        return (
            <div className="App">
                <h1>To-Do List </h1>
                <TodoForum
                todos={this.state.todos}
                value ={this.state.todo}
                inputChangeHandler={this.inputChangeHandler}
                addTask={this.addTask}/>
                <TodoList
                todos={this.state.todos}/>

            </div>
        );
    }
}

export default App;