import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action) => {
      state.forEach(todo => {
        if (todo.id === action.payload.id) {
          todo.completed === false
            ? (todo.completed = true)
            : (todo.completed = false);
        }
      });
    },
    setStoredTodos: (state, action) => {
      // to set the stored todos in initial start
      if (action.payload === null) return;
      action.payload?.forEach(todo => {
        state.push(todo);
      });
    },
    removeTodo: (state, action) => {
      state.forEach((todo, index) => {
        if (todo.id === action.payload.id) {
          state.splice(index, 1);
        }
      });
    },
    removeAll: (state, action) => {
      // this is how i tried to solve removing many completed todos

      /* state.forEach((todo, index) => {
        if (todo.completed === false) return;
        state.splice(index, 1);
      }); */

      // but each time it goes through the loop, the index increases, but if a completed todo's index becomes lower than the current index it doesn't get removed, because the loop went  past that index
      // if some todos were removed and the current index becomes 4, but because other todos were removed, one of the todos would end up having an index lower than the current index, for example the current index is 4 but the index of a completed todo becomes 1, the the loop can't go back to 1 and remove it, then it just leaves it and check for any other completed todos

      // to solve that issue i just made it start in reverse, instead of starting from the first todo, it starts from the last, so now it goes through all the todos even if thier index is changed, it would never be higher that the current, it eather be the same (if a completed todo immediatly follows another) or lower, basicly it wount miss a cmpleted todo
      for (let i = state.length - 1; i >= 0; i--) {
        // if the todo is active, skip to the next loop
        if (state[i]?.completed === false) continue;
        state.splice(i, 1);
      }
    },
  },
};

export const todoSlice = createSlice(options);
export const { addTodo, toggleTodo, setStoredTodos, removeTodo, removeAll } =
  todoSlice.actions;
export default todoSlice.reducer;
