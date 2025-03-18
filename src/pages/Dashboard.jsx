import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5">Today's Workout</Typography>
            <Typography variant="body1">No workout scheduled for today</Typography>
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
  );
};

export default Dashboard;