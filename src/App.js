import React, { Component } from 'react';
// import TodoForum from './components/TodoForum';
// import TodoList from './components/TodoList';
// import treeLogo from './treeLogo.png';
import UpdateBar from './components/cProgressBar.jsx';
import {example , exampleB} from './tData';


class App extends Component{
    constructor(props) { //constructs empty todos list and todo 
        super(props);
        this.state={
            todos: [{
                //task: '',
                //id: '',
                //completed: false,
                //font: "black",
                //color: "red"
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
    toggleComplete = itemId => {
        const todos = this.state.todos.map(todo => {
          if (todo.id === itemId) {
            todo.completed = !todo.completed
          }
          return todo
        });
        this.setState({todos, todo: ''})
      }
    changeColor = itemId => {
        document.getElementById('itemId').style.color="green";
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
        this.addLocalStorage(); //calls when page loads => fills in local data from previous state
        window.addEventListener(
            "beforeunload",
            this.saveLocalStorage.bind(this)
        )
    }
    componentWillUnmount(){
        window.removeEventListener( //removes event listener when unloading page
            "beforeunload",
            this.saveLocalStorage.bind(this)
        )
    }
  
    render() {
        return (
            <div className="App">
                
                {/* <h1 style={{ padding: "10px 20px", textAlign: "center", color: "grey"}}>Productivity App </h1>
                <img  src={treeLogo} alt={'logo'} class="treeLogo"></img>
                <h3 style={{ padding: "5px 10px", textAlign: "center", color: "grey"}}>Created by Keegan Palmo</h3>
                <TodoForum 
                todos={this.state.todos}
                value ={this.state.todo}
                inputChangeHandler={this.inputChangeHandler}
                addTask={this.addTask}
                removeItems={this.removeItems}/>
                <TodoList 
                todos={this.state.todos}
                toggleComplete={this.toggleComplete}/> */}
                <UpdateBar answerInfo={example}/>   
                 
            </div>
            
            
        );
    }
}

export default App;