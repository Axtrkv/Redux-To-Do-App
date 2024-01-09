import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [{id: Date.now(), text: "Add ToDo", isDone: true}],
  reducers: {
    addToDo: (state, action) => {
      state.push(action.payload);
    },
    removeToDo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    removeAll: () => {
      return [];
    },
    checkToDo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
  },
});

export const { addToDo, removeToDo, removeAll, checkToDo } = todosSlice.actions;

export default todosSlice.reducer;
