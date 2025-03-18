import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';

const Progress = () => {
  return (
    <Box sx={{ mt: 12 }}>  {/* Added margin top */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">Progress Tracking</Typography>
          <Card>
            <CardContent>
              <Typography variant="body1">View your fitness progress</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Progress;