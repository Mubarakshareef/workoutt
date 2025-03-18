import { configureStore } from '@reduxjs/toolkit';
import workoutReducer from './slices/workoutSlice';
import progressReducer from './slices/progressSlice';
import userReducer from './slices/userSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    workout: workoutReducer,
    progress: progressReducer,
    user: userReducer,
    auth: authReducer
  }
});