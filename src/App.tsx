import React, {useState} from 'react';
import './style/App.css';
import {TodoItem} from "./components/TodoItem";

// заготовка на будущею тудушку
type ITodo = {
  id: string,
  title: string,
  completed: boolean
}

function App() {
  const [text, setSText] = useState("");
  // если сложная структура  как обьект или массив я использую дженерик
  const [todos, setTodos] = useState(Array<string>)
  // тоже самое
  // const [todos, setTodos] = useState( [""])
  const [] = useState<[string] | null >(null)
  // если мы работаем с обьектами то чаже всего будет такая запись для начального стейта
  const [] = useState<ITodo | null>(null)
  // можео так
  // const [] = useState<ITodo>({} as ITodo)

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
