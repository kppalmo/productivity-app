import React from 'react';

const Todo = props => {
    
    return (
        <div
            key = {props.todo.id}
            onClick={event  => {
                props.toggleComplete(props.todo.id)
            }}>
            <p style={{ color: "red"}}>{props.todo.task}</p>
        </div>
    )
}

export default Todo;