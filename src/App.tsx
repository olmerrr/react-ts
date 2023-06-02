import React, {useState} from 'react';
import './style/App.css';

import {TodoItem} from "./components/TodoList/TodoItem";
import {NewTodoForm} from "./components/TodoList/NewTodoForm";

// заготовка на будущею тудушку
type ITodo = {
  id: string,
  title: string,
  completed: boolean
}

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(Array<string>)

  const handleInput = (event:  React.ChangeEvent<HTMLInputElement>):void => {
      setText(event.target.value)
  }
  const addTodo = () => {
    setTodos([text, ...todos])
    setText("")
  }
  return (
    <div className="App">
      <TodoItem
        key="01"
        id="1"
        completed={false}
        title="test-todo"
        style={{border: "2px solid white", borderRadius: "2px"}}
      />

      <NewTodoForm
        value = {text}
        onChange={handleInput}
        handleClick={addTodo}
      />
    </div>
  );
}

export default App;
