import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addWorkout } from '../store/slices/workoutSlice';

export const useWorkout = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const createWorkout = useCallback(async (workoutData) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch(addWorkout(workoutData));
      return true;
    } catch (error) {
      console.error('Error creating workout:', error);
      return false;
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  return { loading, createWorkout };
};