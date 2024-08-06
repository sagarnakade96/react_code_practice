import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello World",
    },
  ],
  selectedTodo: null, 
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    setSelectedTodo: (state, action) => {
      state.selectedTodo = state.todos.find((todo) => todo.id === action.payload);

    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
      state.selectedTodo = null;
    },
  },
});

export const { addTodo, removeTodo, updateTodo, setSelectedTodo } = todoSlice.actions;
export default todoSlice.reducer;
