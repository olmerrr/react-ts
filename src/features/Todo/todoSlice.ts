import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import {Todo} from "types";

const initialState:Todo[] = [];
const todoSlice = createSlice({
  name: "@todos",
  initialState,
  // тот же вариант без указания внешней переменной
  // initialState: [] as Todo[],
  reducers: {
    addTodo: (state, action:PayloadAction<string>) => {
      const newTodo: Todo = {
        id: nanoid(),
        title: action.payload,
        completed: false,
      }
      return [newTodo, ...state]
    },
    toggleTodo: (state, action:PayloadAction<Todo["id"]>) => {
      const todo = state.find(el => el.id === action.payload);

      if (todo){
        todo.completed = !todo.completed
      }
    },
    // PayloadAction - это то что наша ф-я должна получить в параметрах
    removeTodo: (state, action:PayloadAction<Todo["id"]>) => {
      return state.filter(todo => todo.id !== action.payload)
    }
  }
});

export default todoSlice.reducer;
export const {
  addTodo,
  toggleTodo,
  removeTodo} = todoSlice.actions;