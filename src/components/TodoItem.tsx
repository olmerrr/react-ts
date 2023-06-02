import React from "react";
interface TodoItemProps {
  id: string,
  title: string,
  completed: boolean,
  style?: React.CSSProperties
}
export const TodoItem = (
  {
    id,
    title,
    completed,
    style = {}
  }:TodoItemProps
) => {
  return (
    <li className="todo-item" id={id}
        style={{backgroundColor: "yellow",
          color: "blue", ...style}}>
      <input type="checkbox" checked={completed}/>
      <span>{title}</span>
      <span>&times;</span>
    </li>
  )
}
