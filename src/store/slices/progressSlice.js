import { createSlice } from '@reduxjs/toolkit';

const progressSlice = createSlice({
  name: 'progress',
  initialState: {
    workoutHistory: [],
    metrics: {}
  },
  reducers: {
    addWorkoutHistory: (state, action) => {
      state.workoutHistory.push(action.payload);
    },
    updateMetrics: (state, action) => {
      state.metrics = { ...state.metrics, ...action.payload };
    }
  }
});

export const { addWorkoutHistory, updateMetrics } = progressSlice.actions;
export default progressSlice.reducer;