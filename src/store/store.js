import { configureStore } from '@reduxjs/toolkit';
import workoutReducer from './slices/workoutSlice';
import progressReducer from './slices/progressSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    workout: workoutReducer,
    progress: progressReducer,
    user: userReducer,
  },
});