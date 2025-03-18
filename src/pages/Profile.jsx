import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  TextField,
  Stack,
  Alert,
  Tab,
  Tabs
} from '@mui/material';
import { setUser, logout } from '../store/slices/authSlice'; // Added logout import

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setError('');
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Here you would typically make an API call to your backend
      // For demo, we'll simulate a successful signup
      localStorage.setItem('user', JSON.stringify({
        name: formData.name,
        email: formData.email
      }));
      setActiveTab('login');
    } catch (err) {
      setError('Signup failed. Please try again.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Here you would typically make an API call to your backend
      // For demo, we'll simulate a successful login
      const user = {
        email: formData.email,
        name: formData.name || 'User'
      };
      dispatch(setUser(user));
      navigate('/');
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  if (isAuthenticated) {
    return (
      <Box sx={{ mt: 12 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h4" gutterBottom>User Profile</Typography>
                <Typography variant="body1">Welcome back!</Typography>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  onClick={() => dispatch(logout())}
                  sx={{ mt: 2 }}
                >
                  Logout
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 12 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card>
            <CardContent>
              <Tabs value={activeTab} onChange={handleTabChange} centered sx={{ mb: 3 }}>
                <Tab label="Login" value="login" />
                <Tab label="Sign Up" value="signup" />
              </Tabs>

              {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

              {activeTab === 'signup' ? (
                <form onSubmit={handleSignup}>
                  <Stack spacing={2}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <TextField
                      fullWidth
                      label="Password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <TextField
                      fullWidth
                      label="Confirm Password"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                    <Button 
                      type="submit" 
                      variant="contained" 
                      color="primary"
                      fullWidth
                    >
                      Sign Up
                    </Button>
                  </Stack>
                </form>
              ) : (
                <form onSubmit={handleLogin}>
                  <Stack spacing={2}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <TextField
                      fullWidth
                      label="Password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <Button 
                      type="submit" 
                      variant="contained" 
                      color="primary"
                      fullWidth
                    >
                      Login
                    </Button>
                  </Stack>
                </form>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;