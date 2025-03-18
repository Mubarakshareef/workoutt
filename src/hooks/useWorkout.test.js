import { renderHook, act } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import workoutReducer from '../store/slices/workoutSlice';
import { useWorkout } from './useWorkout';

describe('useWorkout hook', () => {
  const wrapper = ({ children }) => {
    const store = configureStore({
      reducer: {
        workout: workoutReducer,
      },
    });
    return <Provider store={store}>{children}</Provider>;
  };

  test('should create workout', async () => {
    const { result } = renderHook(() => useWorkout(), { wrapper });

    const workoutData = { name: 'Test Workout', exercises: [] };
    
    await act(async () => {
      const success = await result.current.createWorkout(workoutData);
      expect(success).toBe(true);
    });

    expect(result.current.loading).toBe(false);
  });
});