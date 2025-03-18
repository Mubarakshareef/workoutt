import { createSlice } from '@reduxjs/toolkit';

const progressSlice = createSlice({
  name: 'progress',
  initialState: {
    completedWorkouts: [],
  },
  reducers: {
    addCompletedWorkout: (state, action) => {
      state.completedWorkouts.unshift({
        ...action.payload,
        completedDate: new Date().toISOString()
      });
    }
  }
});

export const { addCompletedWorkout } = progressSlice.actions;
export default progressSlice.reducer;