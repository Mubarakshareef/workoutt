import workoutReducer, { setWorkouts, addWorkout, setCurrentWorkout } from './workoutSlice';

describe('workout reducer', () => {
  const initialState = {
    workouts: [],
    currentWorkout: null,
    loading: false,
    error: null
  };

  test('should handle initial state', () => {
    expect(workoutReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  test('should handle setWorkouts', () => {
    const workouts = [{ id: 1, name: 'Workout 1' }];
    const actual = workoutReducer(initialState, setWorkouts(workouts));
    expect(actual.workouts).toEqual(workouts);
  });

  test('should handle addWorkout', () => {
    const workout = { id: 1, name: 'New Workout' };
    const actual = workoutReducer(initialState, addWorkout(workout));
    expect(actual.workouts).toHaveLength(1);
    expect(actual.workouts[0]).toEqual(workout);
  });
});