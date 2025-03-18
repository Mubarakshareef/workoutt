import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Chip, 
  Stack, 
  Button,
  List,
  ListItem,
  ListItemText,
  Divider 
} from '@mui/material';
import { addCompletedWorkout } from '../store/slices/progressSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const todayWorkout = useSelector((state) => state.workout.todayWorkout);
  const completedWorkouts = useSelector((state) => state.progress.completedWorkouts);

  const handleComplete = () => {
    if (todayWorkout) {
      dispatch(addCompletedWorkout(todayWorkout));
    }
  };

  return (
    <Box sx={{ mt: 12 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>Today's Workout</Typography>
              {todayWorkout ? (
                <Stack spacing={2}>
                  <Typography variant="h6">{todayWorkout.name}</Typography>
                  <Typography variant="body1">
                    Difficulty: <Chip label={todayWorkout.difficulty} color="primary" size="small" />
                  </Typography>
                  <Typography variant="body1">
                    Intensity: <Chip label={`${todayWorkout.intensity}/10`} color="secondary" size="small" />
                  </Typography>
                  <Typography variant="body1">Target Muscle Groups:</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {todayWorkout.muscleGroups.map((muscle) => (
                      <Chip key={muscle} label={muscle} size="small" />
                    ))}
                  </Box>
                  <Button 
                    variant="contained" 
                    color="success" 
                    onClick={handleComplete}
                    sx={{ mt: 2 }}
                  >
                    Complete Workout
                  </Button>
                </Stack>
              ) : (
                <Typography variant="body1">No workout scheduled for today</Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>Progress Overview</Typography>
              {completedWorkouts.length > 0 ? (
                <List>
                  {completedWorkouts.map((workout, index) => (
                    <React.Fragment key={workout.completedDate}>
                      <ListItem>
                        <ListItemText
                          primary={workout.name}
                          secondary={
                            <Stack spacing={1} sx={{ mt: 1 }}>
                              <Typography variant="body2">
                                Completed: {new Date(workout.completedDate).toLocaleDateString()}
                              </Typography>
                              <Box sx={{ display: 'flex', gap: 1 }}>
                                <Chip 
                                  label={`Difficulty: ${workout.difficulty}`} 
                                  size="small" 
                                  color="primary"
                                />
                                <Chip 
                                  label={`Intensity: ${workout.intensity}/10`} 
                                  size="small" 
                                  color="secondary"
                                />
                              </Box>
                            </Stack>
                          }
                        />
                      </ListItem>
                      {index < completedWorkouts.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
              ) : (
                <Typography variant="body1">No completed workouts yet</Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;