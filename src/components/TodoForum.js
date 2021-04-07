import React from 'react';

const  TodoForum = props => {
    return(
        <form style={{ padding: "10px 20px", textAlign: "center", color: "white"}}>
            <input
            name = 'todo'
            value={props.value}
            type = 'text'
            onChange={props.inputChangeHandler}
            placeholder = 'Enter a Task' />
            <button
                onClick = {props.addTask}>Add Task</button> 
            <button
                onClick = {props.removeAll}>Remove Tasks</button>

        </form>
    )
}

export default TodoForum;