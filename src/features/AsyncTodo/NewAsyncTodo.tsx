import {NewItem as AddNewItem} from "components/TodoList/NewItem";
import {useAppDispatch} from "redux-hook"
import {createTodo} from "./todosAsyncActions";

export const NewAsyncTodo = () => {
  const dispatch = useAppDispatch();
  const handleNewTodo = (title: string) => dispatch(createTodo(title));

  return <AddNewItem  placeholder="add new todo"  handleClick={handleNewTodo} />
}