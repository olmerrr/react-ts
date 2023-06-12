import {selectAsyncTodos} from "./asyncTodoSelectors";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../redux-hook";
import {Todo} from "../../types";
import {removeTodo, toggleTodo} from "../Todo/todoSlice";
import {TodoItem} from "../../components/TodoList/TodoItem";
import {useEffect} from "react";
import {fetchAllTodos} from "./todosAsyncActions";

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