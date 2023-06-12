import React from "react";
import {Todo} from "../../types";
interface TodoItemProps extends Todo{
  toggleTodo: (id: Todo["id"]) => void,
  removeTodo: (id: Todo["id"]) => void,
  style?: React.CSSProperties
}
export const TodoItem = (
  {
    id,
    title,
    completed,
    toggleTodo,
    removeTodo,
    style = {}
  }:TodoItemProps
) => {
  return (
    <li className="todo-item" id={id.toString()}>
      <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
      <span>{title}</span>
      <span onClick={() => removeTodo(id)}>&times;</span>
    </li>
  )
}
