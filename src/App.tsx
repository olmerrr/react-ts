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
      />
    </div>
  );
}

export default App;
