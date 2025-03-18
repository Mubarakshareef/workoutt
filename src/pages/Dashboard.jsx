import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Card, CardContent, Typography, Box, Chip, Stack } from '@mui/material';

const Dashboard = () => {
  const todayWorkout = useSelector((state) => state.workout.todayWorkout);

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
              <Typography variant="h5">Progress Overview</Typography>
              <Typography variant="body1">Track your fitness journey</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;