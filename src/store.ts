import {combineReducers, configureStore} from "@reduxjs/toolkit";
import todoReducer from "./features/Todo/todoSlice";

export type RootState = ReturnType<typeof store.getState>
// тоже самое
// export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch;

// комбинирую редюсеры
const rootReducer = combineReducers({
  todos: todoReducer
});
// создаю стор
export const store = configureStore({
  reducer: rootReducer,
});

