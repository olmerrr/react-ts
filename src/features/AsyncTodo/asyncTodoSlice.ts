import {Todo} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {createTodo, fetchAllTodos} from "./todosAsyncActions";

export type TodoSlice = {
  status: "idle" | "loading" | "finished" | "error",
  list: Todo[];
}
const initialState: TodoSlice = {
  status: "idle",
  list: []
}

const todosSlice = createSlice({
  name: "@todos",
  initialState,
  reducers: {},
  // нужен для асинхронного изменения стейта, builder - сразу типизирован
  extraReducers:(builder) => {
    builder
      .addCase(fetchAllTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllTodos.fulfilled, (state, action) => {
        state.status = "finished";
        state.list = action.payload
      })
      .addCase(fetchAllTodos.rejected, (state) => {
        state.status = "error";
      })

      .addCase(createTodo.fulfilled, (state, action) => {
        state.status = "finished";
        state.list.push(action.payload);
      })
  }
})

export default todosSlice.reducer;