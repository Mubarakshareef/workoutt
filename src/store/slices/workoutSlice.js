import { createSlice } from '@reduxjs/toolkit';

const workoutSlice = createSlice({
  name: 'workout',
  initialState: {
    todayWorkout: null,
  },
  reducers: {
    setTodayWorkout: (state, action) => {
      state.todayWorkout = action.payload;
    },
  },
});

export const { setTodayWorkout } = workoutSlice.actions;
export default workoutSlice.reducer;