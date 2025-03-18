import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const WorkoutPlanner = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">Workout Planner</Typography>
        <Card>
          <CardContent>
            <Typography variant="body1">Create and manage your workouts</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default WorkoutPlanner;