import React from 'react';
import './style/App.css';
import {TodoItem} from "./components/TodoItem";

function App() {
  return (
    <div className="App">
      <TodoItem
        key="01"
        id="1"
        completed={false}
        title="test-todo"
        style={{border: "2px solid white", borderRadius: "2px"}}
      />
    </div>
  );
}

export default App;
