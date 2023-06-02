import React from "react";
interface TodoItemProps {
  id: string,
  title: string,
  completed: boolean,
}
export const TodoItem = (
  {
    id,
    title,
    completed,
  }:TodoItemProps
) => {
  return (
    <li className="todo-item" id={id}>
      <input type="checkbox" checked={completed}/>
      <span>{title}</span>
      <span>&times;</span>
    </li>
  )
}
