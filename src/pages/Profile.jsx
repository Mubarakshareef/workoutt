import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const Profile = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">User Profile</Typography>
        <Card>
          <CardContent>
            <Typography variant="body1">Manage your profile settings</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Profile;