import React from 'react';

const  TodoForum = props => {
    function removeAll (){
        localStorage.clear();

    }
    
    
    return(
        
        
        <form style={{ padding: "10px 20px", textAlign: "center", color: "white", background: "#D4D4D4"}}>
            <input 
            name = 'todo'
            value={props.value}
            type = 'text'
            onChange={props.inputChangeHandler}
            placeholder = 'Enter a Task' />
            
            <button class="button"
                onClick={props.addTask}>Add a Task</button>
            <button class="button" onClick={props.removeItems}>Remove Completed</button>
            <button class="button" onClick={removeAll()}>Clear All</button>

        </form>
        
    )
}

export default TodoForum;