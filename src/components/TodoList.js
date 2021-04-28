  
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div style={{ padding: "10px 20px", textAlign: "center", color: "grey", background: "#ECECEC"}}>
      {props.todos.map((todo, id) => (
        <Todo
          todo={todo}
          key={id}
          toggleComplete={props.toggleComplete}
          changeColor={props.changeColor}/>
      ))}
    </div>
  )
}

export default TodoList;