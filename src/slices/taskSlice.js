// taskSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  tasks: [],
};

// Create a slice of the store
const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      //console.log("Deleting task ID:", action.payload); 
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      //console.log("Tasks after delete:", state.tasks); 
    },
    updateTask: (state, action) => {
      const { id, updates } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        Object.assign(task, updates);
      }
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    toggleTaskCheck: (state, action) => {
      const taskId = action.payload;
      const task = state.tasks.find(task => task.id === taskId);
      if (task) {
        task.checked = !task.checked; // Toggle the checked state
      }
    },
  },
});

// Export actions and reducer
export const { addTask, deleteTask, updateTask, setTasks, toggleTaskCheck } = taskSlice.actions;
export default taskSlice.reducer;
