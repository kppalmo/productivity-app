  
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div style={{ padding: "10px 20px", textAlign: "center", color: "grey"}}>
      {props.todos.map((todo, id) => (
        <Todo
          todo={todo}
          key={id}
          toggleComplete={props.toggleComplete}/>
      ))}
    </div>
  )
}

export default TodoList;