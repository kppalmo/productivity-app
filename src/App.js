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
    addTask = event =>{ //adds a task to list
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
    toggleComplete = itemId => { //map over array checking todo ID to itemID => if ID=itemID set boolean to opposite => NOT WORKING YET
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
        this.setState(prevState => {
          return {
            todos: prevState.todos.filter(todo => {
              return !todo.completed;
            })
          }
        })
      }
    removeAll = event => { //remove All items in local storage 
        window.localStorage.clear();
        //window.localStorage.removeItem("itemID");
    }
 

    addLocalStorage() { //takes item in state => renders data on screen
        for (let key in this.state) { //loops through items
            if (localStorage.hasOwnProperty(key)) { //checks to see if keys == keys
                let value = localStorage.getItem(key);
                try {
                    value = JSON.parse(value); //converts item strings to javaObject => localStorage only reads objects
                    this.setState({[key]: value}) //sets with unique value
                }
                catch (event){ //fail safe method if above =>try<= causes errors
                    this.setState({[key]: value})
                }
            }
        }
    }
    saveLocalStorage(){//this stores the data on app exit
        for (let key in this.state) {
            localStorage.setItem(key, JSON.stringify(this.state[key])) //gather data on state and save to localStorage
        }

    }
    componentDidMount() {
        this.addLocalStorage();
        window.addEventListener(
            "beforeunload",
            this.saveLocalStorage.bind(this)
        )
    }
    componentWillUnmount(){
        window.removeEventListener(
            "beforeunload",
            this.saveLocalStorage.bind(this)
        )
    }
    

    
           

    render() {
        return (
            <div className="App">
                <h1 style={{ padding: "10px 20px", textAlign: "center", color: "grey"}}>Productivity App </h1>
                <h2 style={{ padding: "10px 20px", textAlign: "center", color: "grey"}}>Created by Keegan Palmo</h2>
                <TodoForum 
                todos={this.state.todos}
                value ={this.state.todo}
                inputChangeHandler={this.inputChangeHandler}
                addTask={this.addTask}
                removeTask={this.removeItems}/>
                <TodoList
                todos={this.state.todos}
                toggleComplete={this.toggleComplete}/>

            </div>
        );
    }
}

export default App;