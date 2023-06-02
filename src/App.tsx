import React, {useEffect, useState} from 'react';
import {Todo} from "./types";

import './style/App.css';

import {TodoItem} from "./components/TodoList/TodoItem";
import {NewTodoForm} from "./components/TodoList/NewTodoForm";


function App() {
  const [todos, setTodos] = useState <Todo[]>([])

  // const handleInput = (event:  React.ChangeEvent<HTMLInputElement>):void => {
  //     setText(event.target.value)
  // }
  const addTodo = (text: string) => {

    const newTodos: Todo = {
      id: new Date().toString(),
      title: "Title1234",
      completed: false
    };
    setTodos([newTodos, ...todos])
    // setText("")
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then(res => res.json())
      // data: Todo[] - поможет нам понять что мы получим
      .then((data: Todo[]) => {
        setTodos(data)
      })
  }, [])
  return (
    <div className="App">
      <TodoItem
        key="1"
        id="1"
        completed={false}
        title="test-todo"
        style={{border: "2px solid white", borderRadius: "2px"}}
      />

      <NewTodoForm handleClick={addTodo}/>
    </div>
  );
}

export default App;
