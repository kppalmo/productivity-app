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
        event.preventDefault(); //this prevents server refreshing when newTask is added
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
    toggleComplete = itemId => { //map over array checking todo ID to itemID => if ID=itemID set boolean to opposite
        const todos = this.state.todos.map(todo => {
            if (todo.id === itemId) {
                todo.completed = !todo.completed
            }
            return todo
        });
        this.setState({todos, todo: ''})
    }
    removeItems = event => {
        event.preventDefault();
    }
           

    render() {
        return (
            <div className="App">
                <h1>Productivity App </h1>
                <h2>Created by Keegan Palmo</h2>
                <TodoForum
                todos={this.state.todos}
                value ={this.state.todo}
                inputChangeHandler={this.inputChangeHandler}
                addTask={this.addTask}/>
                <TodoList
                todos={this.state.todos}
                toggleComplete={this.toggleComplete}/>

            </div>
        );
    }
}

export default App;