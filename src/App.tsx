import React, {useState} from 'react';
import {Todo} from "./types";

import './style/App.css';

import {TodoItem} from "./components/TodoList/TodoItem";
import {NewTodoForm} from "./components/TodoList/NewTodoForm";


function App() {
  const [text, setText] = useState("");


  const [todos, setTodos] = useState <Todo[]>([])

  const handleInput = (event:  React.ChangeEvent<HTMLInputElement>):void => {
      setText(event.target.value)
  }
  const addTodo = () => {

    const newTodos: Todo = {
      id: new Date().toString(),
      title: "Title1234",
      completed: false
    };
    setTodos([newTodos, ...todos])
    setText("")
  }
  return (
    <div className="App">
      <TodoItem
        key="1"
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
