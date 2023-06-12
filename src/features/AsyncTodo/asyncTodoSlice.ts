import {Todo} from "../../types";
import {createSlice} from "@reduxjs/toolkit";

type TodoSlice = {
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
  reducers: {}
})

export default todosSlice.reducer;