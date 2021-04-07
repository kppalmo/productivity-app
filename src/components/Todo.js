import React from 'react';

const Todo = props => {
    
    return (
        <div>
            key = {props.todo.id}
            <button onClick={event => {
                props.toggleComplete(props.todo.id)
            }}> Completed</button>
            <p style={{ color: "red"}}>{props.todo.task}</p>
        </div>
    )
}

export default Todo;