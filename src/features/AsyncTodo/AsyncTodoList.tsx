import {useSelector} from "react-redux";
import {useEffect} from "react";
import {Todo} from "../../types";

import {selectAsyncTodos} from "./asyncTodoSelectors";
import {useAppDispatch} from "../../redux-hook";
import {removeTodo, toggleTodo,fetchAllTodos} from "./todosAsyncActions";
import {TodoItem} from "../../components/TodoList/TodoItem";

export const AsyncTodoList = () => {
  const {list} = useSelector(selectAsyncTodos);
  const dispatch = useAppDispatch();

  const handleRemoveTodo = (id:Todo["id"]) =>  dispatch(removeTodo(id))
  const handleToggleTodo = (id: Todo["id"]) => dispatch(toggleTodo(id))
  // @ts-ignore
  useEffect(() => {
    dispatch(fetchAllTodos())
  }, [])
  return <>
    {list.map((todo) => <ul><TodoItem
      key={todo.id}
      toggleTodo={handleToggleTodo}
      removeTodo={handleRemoveTodo}
      {...todo}
    /></ul>)}
  </>
}