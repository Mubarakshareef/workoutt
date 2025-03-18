import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const ExerciseLibrary = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">Exercise Library</Typography>
        <Card>
          <CardContent>
            <Typography variant="body1">Browse exercises and instructions</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ExerciseLibrary;