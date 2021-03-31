import React from 'react';

const  TodoForum = props => {
    return(
        <form>
            <input
            name = 'todo'
            value={props.value}
            type = 'text'
            onChange={props.inputChangeHandler}
            placeholder = 'Enter a Task' />
            <button
                onClick = {props.addTask}>Add Task</button>
            <button>Remove Tasks</button>

        </form>
    )
}

export default TodoForum;