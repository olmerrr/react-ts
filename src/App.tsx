import {NewTodo} from './features/Todo/NewTodo'
import {TodoList} from './features/Todo/TodoList'
import './style/App.css';

function App() {

  return (
    <div className="App">
      <NewTodo/>
      <TodoList />
    </div>
  );
}

export default App;