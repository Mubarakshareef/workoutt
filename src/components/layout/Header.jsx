import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Exercise Planner
        </Typography>
        <Button color="inherit" onClick={() => navigate('/profile')}>Profile</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;