import {NewTodo} from './features/Todo/NewTodo'
import {TodoList} from './features/Todo/TodoList'
import './style/App.css';

import {NewAsyncTodo} from "./features/AsyncTodo/NewAsyncTodo";
import {AsyncTodoList} from "./features/AsyncTodo/AsyncTodoList";

function App() {

  return (
    <div className="App">
      <NewTodo/>
      <TodoList />


      <hr/>
      <h2>Async Todo's</h2>
      <NewAsyncTodo/>
      <AsyncTodoList/>
    </div>
  );
}

export default App;