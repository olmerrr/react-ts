import {Todo} from "../../types";
import {TodoItem} from "./TodoItem";

interface TodoListProps {
  list: Todo[],
  toggleTodo: (id: Todo["id"]) => void,
  removeTodo: (id: Todo["id"]) => void,
}

export const TodoList = ({list, removeTodo,toggleTodo}: TodoListProps) => {
  return <ul>
    {list.map((todo) => <li><TodoItem
      key={todo.id}
      toggleTodo={toggleTodo}
      removeTodo={removeTodo}
      {...todo}
    /></li>)}
  </ul>
}