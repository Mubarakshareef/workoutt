import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ mt: 12 }}>  {/* Added margin top */}
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
    </Box>
  );
};

export default Dashboard;