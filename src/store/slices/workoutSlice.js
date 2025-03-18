import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  workouts: [],
  currentWorkout: null,
  loading: false,
  error: null
};

const workoutSlice = createSlice({
  name: 'workout',
  initialState,
  reducers: {
    setWorkouts: (state, action) => {
      state.workouts = action.payload;
    },
    addWorkout: (state, action) => {
      state.workouts.push(action.payload);
    },
    setCurrentWorkout: (state, action) => {
      state.currentWorkout = action.payload;
    }
  }
});

export const { setWorkouts, addWorkout, setCurrentWorkout } = workoutSlice.actions;
export default workoutSlice.reducer;