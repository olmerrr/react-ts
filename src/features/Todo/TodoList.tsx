import {TodoItem} from "../../components/TodoList/TodoItem";
import {Todo} from "../../types";

import {useAppDispatch} from "../../redux-hook";
import {selectAllTodos} from "./todoSelectors";
import {useSelector} from "react-redux";
import {removeTodo, toggleTodo} from "./todoSlice";


export const TodoList = () => {

  const list = useSelector(selectAllTodos);
  // можно использ и без допл абстракции useAppSelector()
  // const list = useAppSelector(selectAllTodos);
  // для маленького приложения можно и так подтянуть селектор
  // const list = useAppSelector(state => state.todos);
  const dispatch = useAppDispatch();

  const handleRemoveTodo = (id:Todo["id"]) => dispatch(removeTodo(id))
  const handleToggleTodo = (id: Todo["id"]) => dispatch(toggleTodo(id))

  return <>
    {list.map((todo) => <ul><TodoItem
      key={todo.id}
      toggleTodo={handleToggleTodo}
      removeTodo={handleRemoveTodo}
      {...todo}
    /></ul>)}
  </>
}